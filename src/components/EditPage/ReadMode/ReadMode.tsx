import React from 'react'
import { useRouter } from 'next/navigation';
import { useTask } from '@/src/contexts/TaskContext';


export const ReadMode = ({task}: {task: {title: string, description: string, completed: boolean , id : string}}) => {
 const router = useRouter()
 const {  toggleTaskCompleted } = useTask();

  return (
    <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-100 mb-2 break-words whitespace-pre-line">{task.title}</h2>
      <p className="text-gray-300 break-words whitespace-pre-line">{task.description}</p>
    </div>
    <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
      <h2 className="text-lg font-semibold mb-2 text-gray-200">Task Details</h2>
      {/* <p className="text-gray-400"><span className="font-medium text-gray-300">ID:</span> {task.id}</p> */}
      <p className="text-gray-400"><span className="font-medium text-gray-300">Completed :</span>{task.completed ? " ✅ Completado" : " ❌ Pendiente"}</p>
    </div>
    <div className="flex justify-center gap-5 mt-8">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleTaskCompleted(task.id);
              router.push("/")
            }
            }
            className="bg-green-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Completar
          </button>
          <button
            type="button"
            onClick={() => router.push("/pomodoro")}
            className="bg-blue-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Pomodoro
          </button>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Volver
          </button>
        </div>
  </div>
  )
}
