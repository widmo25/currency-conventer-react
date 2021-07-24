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

    const formatedDate = (time) =>
        time.toLocaleString(undefined, {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    return (
        <p className="clock">
            Dzisiaj jest
            {" "}
            {formatedDate(time)}
        </p>
    )
}

export default Clock