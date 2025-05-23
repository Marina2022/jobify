import * as z from 'zod';

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = 'pending',
  Interview = 'interview',
  Declined = 'declined',
}

export enum JobMode {
  FullTime = 'full-time',
  PartTime = 'part-time',
  Internship = 'internship',
}

export const createAndEditJobSchema = z.object(
  {
    position: z.string().min(2, {message: 'Минимум 2 символа надо'}),
    company: z.string().min(2, {message: 'Минимум 2 символа надо'}),
    location: z.string().min(2, {message: 'Минимум 2 символа надо'}),
    status: z.nativeEnum(JobStatus),
    mode: z.nativeEnum(JobMode),
  }
)

export type CreateAndEditJob = z.infer<typeof createAndEditJobSchema>