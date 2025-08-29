import React from 'react'
import usePomodoro from "../../hooks/usePomodoro"
import { formatTime } from '../../utils/pomodoroFunctions/formatTime'

export const Pomodoro = () => {
    const { time, currentPhase, isRunning, startTimer, pauseTimer, resetTimer } = usePomodoro(25 * 60, 5 * 60, 15 * 60)



    return (
        <section className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold'>{currentPhase === 'work' ? 'Trabajo' : currentPhase === 'shortBreak' ? 'Descanso' : 'Descanso largo'}</h1>
            <p className='text-2xl'>{formatTime(time)}</p>

            {
                !isRunning ? (
                    <button onClick={startTimer} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Start</button>
                ) : (
                    <div className='flex gap-4'>
                        <button onClick={pauseTimer} className='bg-red-500 text-white px-4 py-2 rounded-md'>Pause</button>
                        <button onClick={resetTimer} className='bg-red-500 text-white px-4 py-2 rounded-md'>Reiniciar</button>
                    </div>
                )
            }

        </section>

    )
}
