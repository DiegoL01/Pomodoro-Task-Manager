'use client'
import { useTask } from "@/src/contexts/TaskContext";
import { useUser } from "@/src/contexts/UserContext";
import { TaskCard } from "@/src/components/TaskCard";
import { NoTasks } from "@/src/components/Task/NoTasks";
import { Task } from "@/src/interface/Task";


export default function Home() {
  const { tasks, isLoading } = useTask()
  const { user, isLoading: userLoading } = useUser()

  if (userLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
          <p className="text-xl text-gray-400 mb-8">
            Gestiona tus tareas de manera eficiente
          </p>
          <div className="space-y-4">
            <a
              href="/login"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Iniciar Sesión
            </a>
            <br />
            <a
              href="/register"
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Crear Cuenta
            </a>
          </div>
        </div>
      </div>
    )
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
