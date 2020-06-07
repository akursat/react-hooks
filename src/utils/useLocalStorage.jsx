import React, { useState } from 'react'

// https://usehooks.com/useLocalStorage/
const useLocalStorage = (key, initialValue) => {
    // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [storedValue, setStoredValue] = useState(() => {
        try {
            console.log('rendering useState of localStorage')
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
        }
    })

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}

export { useLocalStorage }
