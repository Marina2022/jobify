'use server'

import {auth} from "@clerk/nextjs/server";
import {CreateAndEditJob, createAndEditJobSchema} from "@/utils/types";
import {redirect} from "next/navigation";

import {Job, JobWhereInput, PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();
export const creatJob = async (values: CreateAndEditJob): Promise<Job | null> => {
  const {
    position,
    company,
    location,
    status,
    mode
  } = values

  const {userId} = await auth()
  let clerkId

  if (!userId) {
    redirect('/')
  } else {
    clerkId = userId
  }

  try {
    createAndEditJobSchema.parse(values)
    const response = await prisma.job.create({
      data: {
        clerkId,
        position,
        company,
        location,
        status,
        mode
      }
    })
    return response
  } catch (err) {
    console.log(err)
    return null
  }
}

type getJobsParamType = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number
}
export const getJobs = async ({search, jobStatus, page = 1, limit = 10}: getJobsParamType):
  Promise<{ jobs: Job[], count: number, page: number, totalPages: number } | null> => {
  const {userId} = await auth()
  let clerkId

  if (!userId) {
    redirect('/')
  } else {
    clerkId = userId
  }

  let whereClause: JobWhereInput = {clerkId}

  if (search) {
    whereClause = {
      ...whereClause,
      OR: [
        {position: {contains: search}},
        {company: {contains: search}},
      ]
    }
  }

  if (jobStatus && jobStatus !== 'all') {
    whereClause = {
      ...whereClause, status: jobStatus
    }
  }

  try {
    const jobs = await prisma.job.findMany({
      where: whereClause,
      orderBy: {createdAt: 'desc'}
    })

    const totalPages = Math.ceil(jobs.length / limit)
    const count = 1

    return ({
      jobs, count, page, totalPages
    })
  } catch (err) {
    console.log(err)
    return ({
      jobs: [], count: 0, page: 0, totalPages: 0
    })
  }
}