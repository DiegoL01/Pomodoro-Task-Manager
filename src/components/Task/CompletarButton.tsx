import { useTask } from '@/src/contexts/TaskContext'
import type { Task } from '@/src/interface/Task'


export const CompletarButton = ({ task }: { task: Task }) => {
    const { toggleTaskCompleted } = useTask()

    return (

        <button onClick={(e) =>{
            e.stopPropagation() 
            toggleTaskCompleted(task.id)
        }}
className = {`text-sm font-semibold ml-2 px-3 py-1 rounded-full ${task.completed
    ? 'bg-green-600 text-green-100'
    : 'bg-red-600 text-red-100'
    }`
            }>
    { task.completed ? "✅ Completada" : "❌ Pendiente" }
        </button >

    )
}