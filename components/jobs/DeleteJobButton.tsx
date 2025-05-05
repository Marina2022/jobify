import React from 'react';
import {Button} from "@/components/ui/button";
import {deleteJob} from "@/utils/actions";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

const DeleteJobButton = ({id}: { id: string }) => {
  const queryClient = useQueryClient()

  const {mutate, isPending} = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: (result) => {
      if (!result) toast('Не удалилось')
      if (result === 'success') {
        toast('Удалилось')
        queryClient.invalidateQueries({queryKey: ['jobs']})
        queryClient.invalidateQueries({queryKey: ['stats']})
        queryClient.invalidateQueries({queryKey: ['charts']})
      }
    }
  })
  const handleDelete = async () => {
    mutate(id)
  }

  return (
    <Button onClick={handleDelete} size='sm' disabled={isPending}>Delete</Button>
  );
};

export default DeleteJobButton;