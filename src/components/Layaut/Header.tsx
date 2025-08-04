"use client"
import { AddTaskButton } from "@/src/components/Layaut/AddTaskButton";
import { TasksCount } from "@/src/components/Layaut/TasksCount";
import { usePathname } from "next/navigation";
import { useUser } from "@/src/contexts/UserContext";

export const Header = () => {
    const pathname = usePathname();
    const { user, logout, isLoading } = useUser();

    if (isLoading) {
        return (
            <header className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
                <div className="flex items-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black">Task Manager</h1>
                </div>
            </header>
        );
    }

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

    return (
        <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white gap-4 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black">Task Manager</h1>
                <TasksCount />
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-xs sm:text-sm text-gray-300 hidden sm:block">
                    Hola, {user.name || user.email}
                </div>
                {pathname !== "/task" && <AddTaskButton />}
                <button
                    onClick={logout}
                    className="rounded-sm flex justify-center gap-2 items-center py-2 px-4 bg-red-600 hover:bg-red-700 transition-colors text-xs sm:text-sm"
                >
                    Cerrar Sesión
                </button>
            </div>
        </header>
    );
}
