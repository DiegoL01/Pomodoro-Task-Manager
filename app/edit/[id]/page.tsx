"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useTask } from "@/src/contexts/TaskContext";

const EditTaskPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const { tasks, updateTask } = useTask();

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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Task not found</h2>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
            onClick={() => router.push("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask(task.id, form.title, form.description);
    setIsEditMode(false); // Vuelve a modo lectura tras guardar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center">Task Details</h1>
          <button
            className="ml-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm"
            onClick={() => setIsEditMode((prev) => !prev)}
          >
            {isEditMode ? "Switch to Read Mode" : "Switch to Edit Mode"}
          </button>
        </div>
        {isEditMode ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-300">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white break-words whitespace-pre-line"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none break-words whitespace-pre-line"
                required
              />
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => { setIsEditMode(false); setForm({ title: task.title, description: task.description }); }}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-100 mb-2 break-words whitespace-pre-line">{task.title}</h2>
              <p className="text-gray-300 break-words whitespace-pre-line">{task.description}</p>
            </div>
            <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">Task Details</h2>
              {/* <p className="text-gray-400"><span className="font-medium text-gray-300">ID:</span> {task.id}</p> */}
              <p className="text-gray-400"><span className="font-medium text-gray-300">Completed :</span>{task.completed ? " ✅ Completed" : " ❌ Pending"}</p>
            </div>
          </div>
        )}
        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
