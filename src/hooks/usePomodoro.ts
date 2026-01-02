

import { useState, useEffect } from 'react';
type ActivityType = 'studying' | 'gym' | 'reading' | 'resting';

const usePomodoro = (workTime = 1500, shortBreak = 300, longBreak = 900) => {


    const [time, setTime] = useState(workTime);
    const [isRunning, setIsRunning] = useState(false);
    const [currentPhase, setCurrentPhase] = useState<'work' | 'shortBreak' | 'longBreak'>('work');
    const [cyclesCompleted, setCyclesCompleted] = useState(0);
    const [activity, setActivity] = useState<ActivityType>('resting')

    const getRandomActivity = (): ActivityType => {
        const activeActivities: ActivityType[] = ['studying', 'gym', 'reading'];
        return activeActivities[Math.floor(Math.random() * activeActivities.length)];
    };

    const updatePhase = () => {
        if (currentPhase === 'work') {
            setCurrentPhase('shortBreak');
        } else if (currentPhase === 'shortBreak') {
            setCyclesCompleted(cyclesCompleted + 1);
            if (cyclesCompleted % 4 === 0) {
                setCurrentPhase('longBreak');
            } else {
                setCurrentPhase('work');
            }
        } else {
            setCurrentPhase('work');
        }
    };
  
    useEffect(() => {
        if (!isRunning) {
            return
        };
        const interval = setInterval(() => {
            setTime((prev) => prev - 1);

            if (time === 0) {
                updatePhase();

            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, time]);


    const startTimer = () => {
        setIsRunning(true), 
        setActivity(getRandomActivity());
    }
    const pauseTimer = () => {
        setIsRunning(false), 
        setActivity('resting');
        
    }
    const resetTimer = () => {
        setTime(currentPhase === 'work' ? workTime : currentPhase === 'shortBreak' ? shortBreak : longBreak);
    };

    return { time, currentPhase, isRunning, startTimer, pauseTimer, resetTimer, activity };
};

export default usePomodoro;