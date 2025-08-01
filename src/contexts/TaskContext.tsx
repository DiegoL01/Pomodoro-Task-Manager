"use client"
import React, { createContext, useState , useContext } from 'react';

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type TaskContextType = {
  tasks: Task[];
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  createTask: (title: string, description: string) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, title: string, description: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    const createTask = (title: string, description: string) => {
        const newId = Math.max(...tasks.map(task => task.id), 0) + 1;
        const newTask: Task = {
            id: newId,
            title,
            description,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const updateTask = (id: number, title: string, description: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title, description } : task
        ));
    }
    

    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
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