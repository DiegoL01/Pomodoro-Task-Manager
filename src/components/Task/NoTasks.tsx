import React from 'react'

export const NoTasks = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-gray-400" 
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
        
        <h2 className="text-2xl font-bold text-gray-100 mb-3">
          No tasks yet
        </h2>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          It looks like you haven&apos;t created any tasks yet. <br/>
          Start by adding your first task to organize your work.
        </p>
        
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-sm text-gray-300 mb-2">
            💡 <span className="font-medium">Tip:</span>
          </p>
          <p className="text-xs text-gray-400">
            Click the &quot;Add Task&quot; button at the top to create your first task.
          </p>
        </div>
      </div>
    </div>
  )
}
