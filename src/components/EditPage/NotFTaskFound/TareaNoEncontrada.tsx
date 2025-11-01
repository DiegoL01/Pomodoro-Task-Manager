import React from 'react'
import { useRouter } from 'next/navigation'

export const TareaNoEncontrada = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Tarea no encontrada</h2>
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                    onClick={() => router.push("/")}
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    )
}
