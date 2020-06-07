import React, { useMemo } from 'react'
import styled from 'styled-components'

const PrimeBoard = styled.div`
    overflow: auto;
    font-size: 1.3rem;
`
const PrimeNumber = ({ iterations, multiplier }) => {
    console.log('PrimeNumber Component rendering')

    const primes = useMemo(() => calculatePrimes(iterations, multiplier), [
        iterations,
        multiplier,
    ])

    // https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript
    function calculatePrimes(iterations, multiplier) {
        console.log('expensive function running:', iterations)
        var primes = []
        for (var i = 0; i < iterations; i++) {
            var candidate = i * (multiplier * Math.random())
            var isPrime = true
            for (var c = 2; c <= Math.sqrt(candidate); ++c) {
                if (candidate % c === 0) {
                    // not prime
                    isPrime = false
                    break
                }
            }
            if (isPrime) {
                primes.push(candidate)
            }
        }
        return primes
    }

    return <PrimeBoard>Prime Numbers:{primes}</PrimeBoard>
}

export { PrimeNumber }
