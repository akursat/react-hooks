import React, { useEffect, useRef, useState } from 'react'
import { Divider } from '~components/divider'
import { Input } from '~components/form'
import { FCoin } from '~components/fcoin'

function UseRefPage() {
    const refInput = useRef(null)
    useEffect(() => {
        refInput.current.focus()
    }, [])

    const videoRef = useRef(null)

    const handleVideo = () => {
        videoRef.current.play()
    }

    useEffect(() => {
        const video = videoRef.current
        video.addEventListener('ended', handleVideo)

        return () => {
            video.removeEventListener('ended', handleVideo)
        }
    }, [handleVideo])

    const [fcoinPrice, setFcoinPrice] = useState(123)
    useEffect(() => {
        const interval = setInterval(() => {
            const isIncreasing = Math.random() >= 0.5
            const randomness = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            isIncreasing
                ? setFcoinPrice(fcoinPrice + randomness)
                : setFcoinPrice(fcoinPrice - randomness)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>useRef Hook</h1>
            <Input type="text" ref={refInput} placeholder="Focus on mount" />
            <br></br>
            <br></br>
            <Divider />
            <video
                width="400"
                controls
                ref={videoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <Divider />
            <FCoin price={fcoinPrice} />
        </div>
    )
}

export default UseRefPage
