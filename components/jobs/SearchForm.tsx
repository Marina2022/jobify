'use client'

import React, {FormEventHandler} from 'react';
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {JobStatus} from "@/utils/types";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const SearchForm = () => {

  const pathName = usePathname()
  const router = useRouter()

  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const jobStatus = searchParams.get('jobStatus') || ''
  
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string
    const jobStatus = formData.get('jobStatus') as string
    
    const params = new URLSearchParams()
    params.set('search', search)
    params.set('jobStatus', jobStatus)
    router.push(`${pathName}?${params.toString()}`)
  }

  const options = ['all', ...Object.values(JobStatus)]

  return (
    <form onSubmit={onSubmit} className="bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg">
      <Input placeholder="Search Jobs" name="search" defaultValue={search} />
      <Select name="jobStatus" defaultValue={jobStatus} >
        <SelectTrigger className="sm:w-[185px] w-full">
          <SelectValue placeholder={jobStatus}/>
        </SelectTrigger>
        <SelectContent>
          {
            options.map((option, i) => {
              return <SelectItem key={i} value={option} className="capitalize">{option}</SelectItem>
            })
          }
        </SelectContent>
      </Select>

      <Button type="submit">Search</Button>

    </form>
  );
};

export default SearchForm;