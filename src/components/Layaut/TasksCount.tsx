"use client"
import { useTask } from '@/src/contexts/TaskContext'

export const TasksCount = () => {
    const {tasks} = useTask()
  return (
    <span className="font-bold text-gray-400 text-xl ml-4 border-solid border-1 p-1 ">{tasks.length} Task</span>
  )
}
