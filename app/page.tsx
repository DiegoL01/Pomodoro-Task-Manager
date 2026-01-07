'use client'
import { useTask } from "@/src/contexts/TaskContext";
import { useUser } from "@/src/contexts/UserContext";
import { TaskCard } from "@/src/components/TaskCard";
import { NoTasks } from "@/src/components/Task/NoTasks";
import { Task } from "@/src/interface/Task";
import { useEffect, useState } from "react";

import Link from "next/link";
export default function Home() {
  const { tasks, isLoading } = useTask()
  const { user, isLoading: userLoading } = useUser()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted || userLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    )
  }



  if (!user) {
    return (
    
      <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12 overflow-hidden">
        
        <div className="relative z-10 max-w-4xl w-full text-center">
          
          <span className="inline-flex items-center py-1.5 px-4 mb-8 text-[10px] sm:text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full shadow-sm">
            🚀 Productividad al máximo
          </span>
  
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Gestiona tus proyectos con <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
              Task Manager
            </span>
          </h1>
  
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            La herramienta definitiva para organizar tus tareas y mejorar tu enfoque con la técnica Pomodoro. 
            <span className="hidden sm:inline"> Simple, rápido y eficiente.</span>
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/register"
              className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center"
            >
              Comenzar gratis
            </Link>
            
            <Link
              href="/login"
              className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gray-800/50 hover:bg-gray-800 text-white font-bold rounded-2xl border border-gray-700 transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
  
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/10 blur-[80px] sm:blur-[120px] rounded-full z-0 pointer-events-none" />
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="text-center text-xl">Cargando tareas...</div>
        ) : tasks.length === 0 ? (
          <NoTasks />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {tasks.map((task: Task) => (
              <li key={task.id} className="w-full max-w-sm">
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
