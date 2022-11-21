import "./Timer.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="timer-circle">
                <div id="time">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                    {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
                </div>
            </div>
            <br />
            <div id="timer-buttons">
                <div id="start-button">
                    {!timerOn && time === 0 && (
                        <button onClick={() => setTimeOn(true)}>Start Timer</button>
                    )}
                    {timerOn && (
                        <button onClick={() => setTimeOn(false)}>Pause</button>
                    )}
                    {!timerOn && time !== 0 && (
                        <button onClick={() => setTimeOn(true)}>Resume</button>
                    )}
                    {!timerOn && time > 0 && (
                        <button onClick={() => setTime(0)}>Reset</button>
                    )}
                </div>
                <div id="done">
                    <Link to='/secondcamera'>
                        <button>Done Cleaning</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Timer;