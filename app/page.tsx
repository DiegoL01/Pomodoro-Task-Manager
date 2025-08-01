'use client'
import { useTask } from "@/src/contexts/TaskContext";
import { TaskCard } from "@/src/components/TaskCard";
import { NoTasks } from "@/src/components/Task/NoTasks";
export type Task = {
  id: number,
  title: string,
  description: string,
  completed: boolean
}
export default function Home() {
  const { tasks } = useTask()
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto sm:flex sm:justify-center sm:items:center">
        {tasks.length === 0 ? (
          <NoTasks />) :
          (<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {tasks.map((task: Task, index: number) => (
              <li key={index} className="w-full max-w-sm">
                <TaskCard task={task} />
              </li>
            ))}
          </ul>)}
      </div>
    </div>
  );
}
