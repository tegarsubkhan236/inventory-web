import { useEffect, useState } from 'react'

const UseCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const intervalDate = setInterval(() => {
            setCurrentDate(new Date())
        }, 60000)
        return () => clearInterval(intervalDate)
    }, [])

    return currentDate
}

export default UseCurrentDate