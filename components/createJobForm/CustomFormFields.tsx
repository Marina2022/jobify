import React from 'react';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {createAndEditJobSchema} from "@/utils/types";
import {UseFormReturn} from "react-hook-form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export const CustomFormInput = ({form, name}: {
  form: UseFormReturn<z.infer<typeof createAndEditJobSchema>>,
  name: "position" | "company" | "location" | "status" | "mode"
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({field}) => (
        <FormItem>
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
  );
};


export const CustomFormSelect = ({form, name, options}:
                                   {
                                     form: UseFormReturn<z.infer<typeof createAndEditJobSchema>>,
                                     name: "position" | "company" | "location" | "status" | "mode",
                                     options: string[],
                                     labelText?: string
                                   }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({field}) => (

        <FormItem className="sm:w-[185px] w-full">
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl className="sm:w-[185px] w-full">
            <Select onValueChange={field.onChange} defaultValue={field.value}  >
              <SelectTrigger className="sm:w-[185px] w-full">
                <SelectValue placeholder="Theme"/>
              </SelectTrigger>
              <SelectContent >
                {
                  options.map((option, i) => {
                    return <SelectItem key={i} value={option} className="capitalize">{option}</SelectItem>
                  })
                }
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )
      }
    />
  )}
