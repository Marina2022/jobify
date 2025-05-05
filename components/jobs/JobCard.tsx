import React from 'react';
import {Job} from "@prisma/client";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DeleteJobButton from "@/components/jobs/DeleteJobButton";
import JobInfo from "@/components/jobs/JobInfo";
import { MapPin, Briefcase, CalendarDays, RadioTower } from 'lucide-react';
import {Badge} from "@/components/ui/badge";
const JobCard = ({job}: { job: Job }) => {
  
  const date = new Date(job.createdAt).toLocaleDateString()
  return (

    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator/>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <JobInfo icon={<Briefcase/>} text={job.mode}/>
          <JobInfo icon={<MapPin/>} text={job.location}/>
          <JobInfo icon={<CalendarDays/>} text={date}/>
          <Badge className="justify-center items-center capitalize">
            <JobInfo icon={<RadioTower className="w-4 h-4" />} text={job.status}/>  
          </Badge>          
        </div>

      </CardContent>
      <CardFooter className='flex gap-4'>
        <Button size="sm" asChild>
          <Link href={`/jobs/${job.id}`}>Edit</Link>
        </Button>
        <DeleteJobButton id={job.id}/>
      </CardFooter>
    </Card>

  );
};

export default JobCard;