"use client"

import {z} from "zod"
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {CustomFormInput, CustomFormSelect} from "@/components/createJobForm/CustomFormFields";
import {CreateAndEditJob, createAndEditJobSchema, JobMode, JobStatus} from "@/utils/types";
import {toast} from "sonner";
import {X} from "lucide-react"
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {creatJob} from "@/utils/actions";
import {useRouter} from "next/navigation";
import {Spinner} from "@/components/ui/spinner";

export function CreateJobForm() {

  const form = useForm<z.infer<typeof createAndEditJobSchema>>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: 'haha',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime
    },
  })

  // const [selectKey, setSelectKey] = useState(0)
  // const [selectKey1, setSelectKey1] = useState(100)

  const queryClient = useQueryClient()
  const router = useRouter()

  const {mutate, isPending} = useMutation({
    mutationFn: (values: CreateAndEditJob) => creatJob(values),
    onSuccess: (data) => {

      if (!data) {
        toast('Поломка поломка!')
      } else {
        toast('Урааа!  получилось')
        queryClient.invalidateQueries({queryKey: ['jobs']})
        queryClient.invalidateQueries({queryKey: ['stats']})
        queryClient.invalidateQueries({queryKey: ['charts']})
        router.push('/jobs')
        //form.reset()
        // setSelectKey(prev => prev + 1) // форсируем перерендер Select'а
        // setSelectKey1(prev => prev + 1) // форсируем перерендер Select'а
      }
    }
  })
  const onSubmit = async (values: z.infer<typeof createAndEditJobSchema>) => {
    await mutate(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-muted p-6 rounded-2xl">
        <div className="flex gap-5 flex-col sm:flex-row">
          <CustomFormInput form={form} name='position'/>
          <CustomFormInput form={form} name='location'/>
          <CustomFormInput form={form} name='company'/>
        </div>

        <div className="flex gap-5 items-end flex-col sm:flex-row">
          {/*<CustomFormSelect form={form} name='status' options={['pending', 'interview', 'declined']} key={selectKey}/>*/}
          {/*<CustomFormSelect form={form} name='mode' options={['full-time', 'part-time', 'internship']} key={selectKey1} />*/}
          <CustomFormSelect form={form} name='status' options={['pending', 'interview', 'declined']}/>
          <CustomFormSelect form={form} name='mode' options={['full-time', 'part-time', 'internship']}/>

          <Button className="cursor-pointer w-[185px] text-white" type="submit">{isPending ?
            <Spinner/> : 'Submit'} </Button>

        </div>
      </form>
    </Form>
  )
}

export default CreateJobForm;