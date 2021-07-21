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
        };
    });

    const formatedDate = () => {
        time.toLocaleString(undefined, {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
    };


    return (
        <p className="clock">Dzisiaj jest {""} {time.toLocaleString(formatedDate)}</p>
    )
}

export default Clock