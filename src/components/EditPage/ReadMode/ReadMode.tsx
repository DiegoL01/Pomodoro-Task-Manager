import React from 'react'

export const ReadMode = ({task}: {task: {title: string, description: string, completed: boolean}}) => {
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
  </div>
  )
}
