"use client"
import { TasksCount } from "@/src/components/Layaut/TasksCount";
import { useUser } from "@/src/contexts/UserContext";
import { HeaderRigth } from "./HeaderRigth";
export const Header = () => {
    const { isLoading } = useUser();

    if (isLoading) {
        return (
            <header className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
                <div className="flex items-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black">Task Manager</h1>
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
            <HeaderRigth />

        </header>
    );
}
