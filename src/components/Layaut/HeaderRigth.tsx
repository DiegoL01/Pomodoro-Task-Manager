import { usePathname } from "next/navigation"
import { useUser } from "@/src/contexts/UserContext"
import { AddTaskButton } from "./AddTaskButton"
import { HomeIcon } from "./HomeIcon"
import Link from "next/link"


export const HeaderRigth = () => {
    const { user, logout } = useUser()
    const pathname = usePathname()
    if (!user) {
        return (
            <header className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
              
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        href="/login"
                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 rounded-sm transition-colors"
                    >
                        Iniciar Sesión
                    </Link>
                    <Link
                        href="/register"
                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-600 hover:bg-gray-700 rounded-sm transition-colors"
                    >
                        Registrarse
                    </Link>
                </div>
            </header>
        );
    }
    if (pathname.startsWith("/edit")) {

        return (
            <>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="text-9xl sm:text-sm text-gray-300 hidden sm:block">
                        <p className="text-2xl font-semibold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                            Hola, {user.name || user.email}
                        </p>
                    </div>
                </div>
            </>
        )
    }
    if (pathname.startsWith("/pomodoro")) {

        return (
            <>
                <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-9xl sm:text-sm text-gray-300 hidden sm:block">
                        <p className="text-2xl font-semibold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                            Hola, {user.name || user.email}
                        </p>
                    </div>
                    <Link
                        href={"/"}
                        className="rounded-sm flex justify-center gap-2 items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                    >
                        <HomeIcon />
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
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
        </>
    )
} 