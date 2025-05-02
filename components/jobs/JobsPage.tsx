'use client'
import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getJobs} from "@/utils/actions";

const JobsPage = () => {
  
  // const [jobStatus, setJobStatus] = useState('all')
  const [jobStatus] = useState('all')
  
  // const {data, isPending} = useQuery({
  const {data} = useQuery({
    queryFn: ()=>getJobs({search: '', jobStatus: jobStatus, page: 1, limit: 10}),
    queryKey: ['jobs', 'search', 'jobStatus', 'page', 'limit']
  })


  console.log('data', data)
  if (!data) return null
  
  return (
    <ul>
      {
        data.jobs.map((job, i)=>{
          return (
            <li className="mb-5 p-2 bg-red-200" key={i}>{job.position}</li>
          )
        })
      }
    </ul>
  );
};

export default JobsPage;
