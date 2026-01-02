"use client"
import React from 'react'
import { Pomodoro } from "@/src/components/Pomodoro/Pomodoro"

const PomodoroPage = () => {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
    {/* <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg"> */}
     <Pomodoro/>
    {/* </div> */}
  </div>
  )
}
export default PomodoroPage;