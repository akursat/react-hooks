import React, { useState, useEffect } from 'react'

const OddEven = ({ numbers }) => {
    const [state, setState] = useState(0)

    useEffect(() => {
        numbers.map((val) => {
            if (isOdd(val)) {
                setState((s) => s + 1)
            }
        })
        return () => {
            setState(0)
        }
    }, [numbers])

    function isOdd(num) {
        return num % 2
    }

    return <div>Odd Numbers:{state}</div>
}

export { OddEven }
