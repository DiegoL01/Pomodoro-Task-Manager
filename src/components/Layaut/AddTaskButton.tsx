'use client'
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const AddTaskButton = () => {
    const router = useRouter()
    return (
        <button 
            onClick={() => router.push("/task")} 
            className="rounded-sm flex justify-center gap-2 items-center py-2 px-4 bg-green-300 hover:bg-green-400 transition-colors text-xs sm:text-sm"
        >
            <FaPlus className="text-xs sm:text-sm"/>
            <span className="hidden sm:inline">Add Task</span>
            <span className="sm:hidden">Add</span>
        </button>
    )
}
