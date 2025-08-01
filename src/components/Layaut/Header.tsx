"use client"
import { AddTaskButton } from "@/src/components/Layaut/AddTaskButton";
import { TasksCount } from "@/src/components/Layaut/TasksCount";
import { usePathname } from "next/navigation";

export const Header = () => {

    const pathname = usePathname();

  return (
    <header className="flex justify-between py-15 bg-gray-800 text-white">
    <div className="flex justify-center items-center ">
      <h1 className="text-3xl font-black ml-2">Task Manager</h1>
      <TasksCount />
    </div>
    {pathname !== "/task" && <AddTaskButton />}
  </header>
  )
}
