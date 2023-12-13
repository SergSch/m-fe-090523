import { useEffect } from "react"
import { useState } from "react"

export default function Greeting() {

  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect( () => {

    const intervalId = setInterval( () => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div>
      <p>{time}</p>
      <p>{`Hello, stranger!`}</p>
    </div>
  )
}