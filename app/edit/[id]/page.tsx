"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useTask } from "@/src/contexts/TaskContext";
import { TareaNoEncontrada } from "@/src/components/EditPage/NotFTaskFound/TareaNoEncontrada"
import { IsEditMode } from "@/src/components/EditPage/IsEditMode/IsEditMode"
import { ReadMode } from "@/src/components/EditPage/ReadMode/ReadMode";

const EditTaskPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { tasks, updateTask, toggleTaskCompleted } = useTask();

  const task = tasks.find((t) => t.id === id);

  const [form, setForm] = useState({
    title: task?.title || "",
    description: task?.description || "",
  });

  const [isEditMode, setIsEditMode] = useState(false); // Por defecto solo lectura

  useEffect(() => {
    if (task) {
      setForm({ title: task.title, description: task.description });
    }
  }, [task]);

  if (!task) {
    return (
      <TareaNoEncontrada />
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTask(task.id, form.title, form.description);
    setIsEditMode(false); // Vuelve a modo lectura tras guardar
    router.push("/")
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-3">Detalles de la Tarea</h1>
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <button
            className="ml-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm"
            onClick={() => setIsEditMode((prev) => !prev)}
          >
            {isEditMode ? "Switch to Read Mode" : "Switch to Edit Mode"}
          </button>
        </div>
        {isEditMode ? (
          // aqui es donde va el comoponente de editar
          <IsEditMode handleSubmit={handleSubmit} handleChange={handleChange} form={form} setIsEditMode={setIsEditMode} setForm={setForm} task={task} />
        ) : (
         //aqui es donde va el componente de solo lectura
         <ReadMode task={task}/>
        )}
        <div className="flex justify-center gap-5 mt-8">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleTaskCompleted(task.id);
              router.push("/")
            }
            }
            className="bg-green-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Completar
          </button>
          <button
            type="button"
            onClick={() => router.push("/pomodoro")}
            className="bg-blue-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Pomodoro
          </button>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
