'use client'

import React from "react";
import SearchForm from "@/components/jobs/SearchForm";
import JobsList from "@/components/jobs/JobsList";

const JobsPage = () => {

  return (
    <>
      <SearchForm/>
      <JobsList/>     
    </>
  );
};

export default JobsPage;
