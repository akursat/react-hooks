import React, { useContext } from 'react'
import { Button } from '~components/button'
import { ThemeUpdateContext, ThemeContext } from '~layouts/context'
function UseContextPage() {
    const isDark = useContext(ThemeContext)
    const setDarkMode = useContext(ThemeUpdateContext)
    return (
        <div>
            <h1>useContext Hook</h1>
            <Button onClick={(e) => setDarkMode(!isDark)}>Change Theme</Button>
            <p>Is Dark Mode enabled: {isDark ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default UseContextPage
