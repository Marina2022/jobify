"use client"

import {z} from "zod"
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {CustomFormInput, CustomFormSelect} from "@/components/CustomFormFields";
import {createAndEditJobSchema, JobMode, JobStatus} from "@/utils/types";


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


  const onSubmit = async(values: z.infer<typeof createAndEditJobSchema>) => {
    console.log('hello')
    console.log(values)
  }

  
  console.log("formState", form.formState)

  
    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-muted p-6 rounded-2xl">
        <div className="flex gap-5 flex-col sm:flex-row">
          <CustomFormInput form={form} name='position'/>
          <CustomFormInput form={form} name='location'/>
          <CustomFormInput form={form} name='company'/>
        </div>

        <div className="flex gap-5 items-end flex-col sm:flex-row">
          <CustomFormSelect form={form} name='status' options={['pending', 'interview', 'declined']}/>
          <CustomFormSelect form={form} name='mode' options={['full-time', 'part-time', 'internship']}/>
          <Button className="cursor-pointer w-[185px] text-white" type="submit">Submit</Button>
        </div>

        
      </form>
    </Form>
  )
}

export default CreateJobForm;