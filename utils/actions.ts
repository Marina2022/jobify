'use server'

import {auth} from "@clerk/nextjs/server";
import {CreateAndEditJob, createAndEditJobSchema} from "@/utils/types";
import {redirect} from "next/navigation";

import {Job, PrismaClient} from '@prisma/client';

import * as runtime from "@prisma/client/runtime/library";

export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

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

  type StringFilter<$PrismaModel = never> = {
    contains?: string | StringFieldRefInput<$PrismaModel>
  }

  type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    clerkId?: StringFilter<"Job"> | string
    position?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    status?: StringFilter<"Job"> | string
    mode?: StringFilter<"Job"> | string
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
    console.log('and here')
    whereClause = {
      ...whereClause, status: jobStatus
    }
  }

  console.log('whereClause', whereClause)

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