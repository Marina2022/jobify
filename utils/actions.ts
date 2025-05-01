'use server'

import prisma from "@/utils/db";
import {auth} from "@clerk/nextjs/server";
import {CreateAndEditJob} from "@/utils/types";

export const creatJob = async (values: CreateAndEditJob): Promise<CreateAndEditJob | null> => {

  const {
    position,
    company,
    location,
    status,
    mode
  } = values

  const {userId} = await auth()

  const clerkId = userId 

  try {
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

    console.log('response', response)
    return response.data
  } catch (err) {
    console.log(err)
    return null
  }
}