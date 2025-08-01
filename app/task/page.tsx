'use client'
import React, { useState } from 'react'
import { useTask } from '@/src/contexts/TaskContext'
import { useRouter } from 'next/navigation'

const NewTask = () => {
  const [task, setTask] = useState({ title: "", description: "" })
  const { createTask } = useTask()
  const router = useRouter()  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createTask(task.title, task.description)
    setTask({ title: "", description: "" }) // Limpiar formulario
  }
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTask({ ...task, [name]: value })
    console.log(task)
  }
  const handlerClick = () => {
    setTask({ title: "", description: "" })
    router.push("/")
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-8'>Crear Nueva Tarea</h1>

        <form onSubmit={handleSubmit} className='bg-gray-700 rounded-lg p-6 md:p-8 shadow-lg'>
          <div className='space-y-4'>
            <div>
              <label htmlFor="title" className='block text-sm font-medium mb-2'>
                Título
              </label>
              <input
                name='title'
                id="title"
                type="text"
                placeholder='Escribe un título'
                value={task.title}
                onChange={handlerChange}
                className='w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              />
            </div>

            <div>
              <label htmlFor="description" className='block text-sm font-medium mb-2'>
                Descripción
              </label>
              <textarea
                name='description'
                id="description"
                placeholder='Escribe una descripción'
                value={task.description}
                onChange={handlerChange}
                rows={4}
                className='w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                required
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-3 pt-4'>
              <button
                type="submit"
                disabled={!task.title}
                className='disabled:opacity-50 flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200'
              >
                Save
              </button>
              <button
                type="button"
                onClick={handlerClick}
                className='flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200'
              >
                Clear
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Back
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default NewTask