import React, { useMemo, useState, useCallback } from 'react'
import { Input } from '~components/form'
import { Filter } from '~components/filter'

function UseCallbackPage() {
    const [text, setText] = useState('')
    const words = useMemo(
        () => [
            'spray',
            'limit',
            'elite',
            'exuberant',
            'destruction',
            'present',
        ],
        []
    )
    const filter = useCallback((element) => {
        return element.length > 6
    }, [])

    return (
        <div>
            <h1>useCallback Hook</h1>
            <Filter filter={filter} array={words}></Filter>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default UseCallbackPage
