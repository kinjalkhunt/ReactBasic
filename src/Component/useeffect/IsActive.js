import { useState, useEffect } from "react";

const IsActive = () => {
    const [time, setTime] = useState(10);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let timer;
        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [time, isActive]);

    const resetTimer = () => {
        setTime(10);
        setIsActive(true);
    };

    const toggleTimer = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-64 mx-auto">
            <h1 className="text-2xl font-bold">Countdown: {time}s</h1>
            <div className="flex gap-2">
                <button
                    onClick={toggleTimer}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    {isActive ? "Pause" : "Resume"}
                </button>
                <button
                    onClick={resetTimer}
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default IsActive;
