import React from 'react';
import {QueryClient} from "@tanstack/query-core";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import JobsPage from "@/components/jobs/JobsPage";
import {getJobs} from "@/utils/actions";

const Jobs = async () => {
  
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: ()=>getJobs({})
  })
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JobsPage />
    </HydrationBoundary>
  );
};

export default Jobs;