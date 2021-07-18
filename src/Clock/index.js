import { useState, useEffect } from "react"
import "./style.css"

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            (
                clearInterval(clockInterval)
            )
        }
    }
    )
    return (
        <p className="clock">Dzisiaj jest {time.toLocaleDateString(undefined, {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })}</p>
    )
}

export default Clock