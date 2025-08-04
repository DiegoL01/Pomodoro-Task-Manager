"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from './UserContext';

type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

type TaskContextType = {
  tasks: Task[];
  createTask: (title: string, description: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, title: string, description: string, completed?: boolean) => Promise<void>;
  fetchTasks: () => Promise<void>;
  isLoading: boolean;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useUser()

    const fetchTasks = async () => {
        if (!user) return
        
        setIsLoading(true)
        try {
            const response = await fetch(`/api/tasks?userId=${user.id}`)
            if (response.ok) {
                const data = await response.json()
                setTasks(data)
            }
        } catch (error) {
            console.error('Error al obtener tareas:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (user) {
            fetchTasks()
        } else {
            setTasks([])
        }
    }, [user])

    const createTask = async (title: string, description: string) => {
        if (!user) return

        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    userId: user.id
                })
            })

            if (response.ok) {
                const newTask = await response.json()
                setTasks(prev => [newTask, ...prev])
            }
        } catch (error) {
            console.error('Error al crear tarea:', error)
        }
    }

    const deleteTask = async (id: string) => {
        try {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                setTasks(prev => prev.filter(task => task.id !== id))
            }
        } catch (error) {
            console.error('Error al eliminar tarea:', error)
        }
    }

    const updateTask = async (id: string, title: string, description: string, completed?: boolean) => {
        try {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    completed: completed !== undefined ? completed : false
                })
            })

            if (response.ok) {
                const updatedTask = await response.json()
                setTasks(prev => prev.map(task => 
                    task.id === id ? updatedTask : task
                ))
            }
        } catch (error) {
            console.error('Error al actualizar tarea:', error)
        }
    }

    return (
        <TaskContext.Provider value={{ 
            tasks, 
            createTask, 
            deleteTask, 
            updateTask, 
            fetchTasks,
            isLoading 
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider")
    }
    return context
}