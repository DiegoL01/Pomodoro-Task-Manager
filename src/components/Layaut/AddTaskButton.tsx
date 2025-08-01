'use client'
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export const AddTaskButton = () => {
    const router = useRouter()
  return (
    <button onClick={()=>router.push("/task")} className=" rounded-sm flex justify-center gap-2 items-center py-2 px-4 bg-green-300 mr-1"><FaPlus/>Add Task</button>
  )
}
