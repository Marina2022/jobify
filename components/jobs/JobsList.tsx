'use client'
import React from 'react';
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getJobs} from "@/utils/actions";
import {useSearchParams} from "next/navigation";
import JobCard from "@/components/jobs/JobCard";

const JobsList = () => {
  

  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const jobStatus = searchParams.get('jobStatus') || ''
  const page = Number(searchParams.get('page')) || 1

  const {data} = useQuery({
    queryFn: () => getJobs({search, jobStatus, page, limit: 10}),
    queryKey: ['jobs', search, jobStatus, page],
    placeholderData: keepPreviousData,

  })

  if (!data) return null

  return (    
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        data.jobs.map((job, i) => {
          return <JobCard job={job} key={i} /> 
        })
      }
    </ul>
  )
};

export default JobsList;