import { useEffect, useState } from "react";
import reactRouterDom from "react-router-dom";

function Timer() {
    const [time, setTime] = useState(0)
    const [timerOn, setTimeOn] = useState(false)

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                //increments by 10 milliseconds
                setTime(prevTime => prevTime + 10)
            }, 10)
        }
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])

    return (
        <div className="Timer">
            <h1>Ready to start your CleanUp?</h1>
            <div>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
            </div>
            <div>
                {!timerOn && time == 0 && (
                    <button onClick={() => setTimeOn(true)}>Start</button>
                )}
                {timerOn && (
                    <button onClick={() => setTimeOn(false)}>Pause</button>
                )}
                {!timerOn && time != 0 && (
                    <button onClick={() => setTimeOn(true)}>Resume</button>
                )}
                {!timerOn && time > 0 && (
                    <button onClick={() => setTime(0)}>Reset</button>
                )}
            </div>
            <div>
                <Link to='Summary'>
                    <button>Done Cleaning</button>
                </Link>
            </div>
        </div>
    );
}

export default Timer;