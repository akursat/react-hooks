import React, { useState, createContext } from 'react'

const ThemeContext = createContext(null)
const ThemeUpdateContext = createContext(null)

const ThemeProvider = ({ children }) => {
    const [isDark, setDarkMode] = useState(false)

    return (
        <ThemeUpdateContext.Provider value={setDarkMode}>
            <ThemeContext.Provider value={isDark}>
                {children}
            </ThemeContext.Provider>
        </ThemeUpdateContext.Provider>
    )
}

export { ThemeContext, ThemeUpdateContext, ThemeProvider }
