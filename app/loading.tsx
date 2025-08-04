export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Logo/Icono animado */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-blue-600 rounded-lg animate-pulse flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-white animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Task Manager
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-400 text-lg mb-8">
          Cargando tu espacio de trabajo...
        </p>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Círculo exterior */}
            <div className="w-12 h-12 border-4 border-gray-700 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>

        {/* Puntos animados */}
        <div className="flex justify-center mt-6 space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Texto de estado */}
        <p className="text-gray-500 text-sm mt-6">
          Preparando todo para ti
        </p>
      </div>
    </div>
  )
}
