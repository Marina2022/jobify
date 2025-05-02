import React from 'react';
import CreateJobForm from "@/components/createJobForm/CreateJobForm";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";

const AddJob = () => {
  
  const queryClient = new QueryClient()
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateJobForm />
    </HydrationBoundary>
  );
};

export default AddJob;