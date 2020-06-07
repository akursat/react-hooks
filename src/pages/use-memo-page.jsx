import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '~components/button'
import { Input } from '~components/form'
import { Divider } from '~components/divider'
import { PrimeNumber } from '~components/prime-number'
import { OddEven } from '~components/odd-even'

function UseMemoPage() {
    const [text, setText] = useState('')
    const numbers = useMemo(() => [1, 2, 3, 4, 5, 6, 7], [])

    return (
        <div>
            <h1>useMemo Hook</h1>
            <OddEven numbers={numbers} />
            <Divider />
            <Input
                type="number"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <br />
            <PrimeNumber iterations={2} multiplier={10}></PrimeNumber>
        </div>
    )
}

export default UseMemoPage
