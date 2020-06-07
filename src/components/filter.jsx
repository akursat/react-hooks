import React, { useState, useEffect } from 'react'

const Filter = ({ filter, array }) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const result = array.filter((element) => filter(element))
        setState(result)
        return () => {
            setState(0)
        }
    }, [filter, array])

    return (
        <div>
            Filtered values:
            <ul>
                {state.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </div>
    )
}

export { Filter }
