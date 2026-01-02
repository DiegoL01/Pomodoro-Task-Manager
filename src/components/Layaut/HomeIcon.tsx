

import { usePathname } from "next/navigation"
import { useUser } from "@/src/contexts/UserContext"
import { AddTaskButton } from "./AddTaskButton"
import Link from "next/link" // 1. Importamos Link

// 2. Definimos un componente simple para el icono de la casa
export const HomeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

export const HeaderRigth = () => {
    const { user , logout} = useUser()
    const pathname = usePathname()
    
    if (!user) {
        return (
            <header className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
                <div className="flex items-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black">Task Manager</h1>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <a
                        href="/login"
                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 rounded-sm transition-colors"
                    >
                        Iniciar Sesión
                    </a>
                    <a
                        href="/register"
                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-600 hover:bg-gray-700 rounded-sm transition-colors"
                    >
                        Registrarse
                    </a>
                </div>
            </header>
        );
    }

    if (pathname.startsWith("/edit")) {
        return (
            <>
               <div className="flex items-center gap-2 sm:gap-4">
                    <button
                        onClick={logout}
                        className="rounded-sm flex justify-center gap-2 items-center py-2 px-4 bg-red-600 hover:bg-red-700 transition-colors text-xs sm:text-sm"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </>
        )
    }
    else
        return (
            <>
               <div className="flex items-center gap-2 sm:gap-4">
                    <div className="text-xs sm:text-sm text-gray-300 hidden sm:block">
                        Hola, {user.name || user.email}
                    </div>
                    
                    {/* 3. Aquí está la lógica para mostrar el icono solo en /pomodoro */}
                    {pathname === "/pomodoro" && (
                        <Link 
                            href="/" 
                            className="text-gray-300 hover:text-white transition-colors p-2 rounded-sm hover:bg-gray-700"
                            title="Ir al inicio"
                        >
                            <HomeIcon />
                        </Link>
                    )}

                    {pathname !== "/task" && <AddTaskButton />}
                    <button
                        onClick={logout}
                        className="rounded-sm flex justify-center gap-2 items-center py-2 px-4 bg-red-600 hover:bg-red-700 transition-colors text-xs sm:text-sm"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </>
        )
}
