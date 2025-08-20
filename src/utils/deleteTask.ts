import { useTask } from "@/src/contexts/TaskContext";

export function useDeleteTask() {
  const { deleteTask } = useTask();

  // Retorna una función que puedes asignar al onClick del botón Delete
  return (id: string) => {
    deleteTask(id);
  };
}

