import React from 'react'

type EditForm = { title: string, description: string }

type Props = {
    handleSubmit: (e: React.FormEvent) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    form: EditForm
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>
    setForm: React.Dispatch<React.SetStateAction<EditForm>>
    task: EditForm
}

export const IsEditMode = ({
    handleSubmit,
    handleChange,
    form,
    setIsEditMode,
    setForm,
    task
}: Props) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-300">
                    Título
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
                    Descripción
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
                    Guardar Cambios
                </button>
                <button
                    type="button"
                    onClick={() => { setIsEditMode(false); setForm({ title: task.title, description: task.description }); }}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}
