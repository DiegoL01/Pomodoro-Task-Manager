

import { useState, useEffect, useCallback } from 'react';
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

    const updatePhase = useCallback(() => {
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
    },[currentPhase, setCurrentPhase,cyclesCompleted, setCyclesCompleted,]);
  
    useEffect(() => {
        if (!isRunning) {
            return
        };
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    // Si el tiempo llegó a 0, ejecutamos la fase
                    updatePhase();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    
        return () => clearInterval(interval);
        // Quitamos 'time' de aquí para que el efecto no se reinicie cada segundo
    }, [isRunning, updatePhase]);

    const startTimer = () => {
        setIsRunning(true); 
        setActivity(getRandomActivity());
    }
    const pauseTimer = () => {
        setIsRunning(false);
        setActivity('resting');
        
    }
    const resetTimer = () => {
        setTime(currentPhase === 'work' ? workTime : currentPhase === 'shortBreak' ? shortBreak : longBreak);
    };

    return { time, currentPhase, isRunning, startTimer, pauseTimer, resetTimer, activity };
};

export default usePomodoro;