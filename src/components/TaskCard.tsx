import { AiTwotoneDelete } from "react-icons/ai";
import type { Task } from '@/app/page'
import { useTask } from "../contexts/TaskContext";
import { useRouter } from "next/navigation"; 
export const TaskCard = ({ task }: { task: Task }) => {
    const {push} = useRouter()
    const { deleteTask } = useTask()
    return (
        <div onClick={()=>push("/edit/"+task.id)} className='cursor-pointer bg-gray-800 rounded-lg text-white w-full h-auto min-h-[200px] flex flex-col justify-between p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600'>
            <div className="flex-1 flex flex-col  ">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-bold text-gray-100 break-words line-clamp-1'>{task.title}</h2>
                    <button onClick={() => deleteTask(task.id)} className=' flex items-center gap-1  border border-1 text-gray-300 px-2 py-1 rounded-2xl hover:bg-gray-700 transition-colors'>
                        <AiTwotoneDelete />
                        Delete
                    </button>
                </div>
                <p className='text-sm text-gray-300 leading-relaxed break-words line-clamp-3'>{task.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                    <span className='text-sm font-medium text-gray-400'>Status:</span>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${task.completed
                            ? 'bg-green-600 text-green-100'
                            : 'bg-red-600 text-red-100'
                        }`}>
                        {task.completed ? "✅ Completed" : "❌ Pending"}
                    </span>
                </div>
            </div>
        </div>
    )
}
