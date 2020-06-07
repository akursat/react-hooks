import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const PriceLabel = styled.span`
    font-size: 3rem;
`

const PriceBoard = styled.span`
    color: ${(props) => props.color}!important;
    font-size: 3rem;
`

const FCoin = ({ price }) => {
    const priceRef = useRef(null)
    const [color, setColor] = useState('gray')

    useEffect(() => {
        const oldPrice = priceRef.current
        if (price > oldPrice) {
            setColor('green')
        } else if (price < oldPrice) {
            setColor('red')
        } else {
            setColor('gray')
        }
        priceRef.current = price
    }, [price])

    return (
        <div>
            <PriceLabel>f-coin live:</PriceLabel>
            <PriceBoard color={color}>{price}</PriceBoard>
        </div>
    )
}

export { FCoin }
