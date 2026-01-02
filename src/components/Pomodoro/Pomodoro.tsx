"use client"
import React from 'react'
import usePomodoro from "../../hooks/usePomodoro"
import { formatTime } from '../../utils/pomodoroFunctions/formatTime'
import Link from 'next/link'
import { ActivityCharacter } from '@/app/pomodoro/ActivityCharacter'

export const Pomodoro = () => {
    const { time, currentPhase, isRunning, startTimer, pauseTimer, resetTimer , activity } = usePomodoro(25 * 60, 5 * 60, 15 * 60)



    return (
        <section className='flex flex-col items-center justify-center min-h-screen bg-[#f8fafc] dark:bg-gray-900 px-4'>
            <div className='w-full max-w-md p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 space-y-8'>
                <div className="flex  justify-center items-center">
                <h1 className={`text-4xl font-bold text-center mb-2 ${
                    currentPhase === 'work' 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : currentPhase === 'shortBreak' 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : 'text-indigo-600 dark:text-indigo-400'
                }`}>
                    {currentPhase === 'work' ? 'Trabajo' : currentPhase === 'shortBreak' ? 'Descanso' : 'Descanso largo'}
                </h1>
                <ActivityCharacter activity={activity} className='w-20 h-20'/>
                </div>
                
                <div className='relative w-48 h-48 mx-auto'>
                    <div className='absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700 shadow-inner'></div>
                    <div className='relative flex items-center justify-center w-full h-full'>
                        <p className='text-5xl font-mono font-bold text-gray-800 dark:text-gray-200'>
                            {formatTime(time)}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-4 items-center'>
                    {!isRunning ? (
                        <>
                            <button 
                                onClick={startTimer} 
                                className='w-full px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                            >
                                Iniciar
                            </button>
                            <Link 
                                href="/"
                                className='w-full px-8 py-3 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-center'
                            >
                                Volver a Tareas
                            </Link>
                        </>
                    ) : (
                        <div className='flex gap-4 w-full'>
                            <button 
                                onClick={pauseTimer} 
                                className='flex-1 px-6 py-3 text-lg font-semibold text-white bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50'
                            >
                                Pausar
                            </button>
                            <button 
                                onClick={resetTimer} 
                                className='flex-1 px-6 py-3 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
                            >
                                Reiniciar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}
