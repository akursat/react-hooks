import React, { useReducer } from 'react'
import { Button } from '~components/button'
import styled from 'styled-components'

const Div = styled.div`
    font-size: 5em;
    text-align: center;
    & p {
        color: #ef5777;
    }
`

const initialState = { count: 0 }

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count !== 0 ? state.count - 1 : state.count }
        case 'reset':
            return { count: 0 }
        default:
            return state
    }
}

function UseReducerPage() {
    const [{ count }, dispatch] = useReducer(counterReducer, initialState)
    return (
        <div>
            <h1>useReducer Hook</h1>
            <Div>
                <p>Count: {count}</p>
                <Button onClick={() => dispatch({ type: 'increment' })}>
                    +
                </Button>
                <Button onClick={() => dispatch({ type: 'decrement' })}>
                    -
                </Button>
                <Button onClick={() => dispatch({ type: 'reset' })}>
                    Reset
                </Button>
            </Div>
        </div>
    )
}

export default UseReducerPage
