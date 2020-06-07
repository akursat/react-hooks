import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
    font-size: 1.3em;
    color: #1e272e;
    white-space: normal;
    border-radius: 2px;
    padding: 5px 7px;
    line-height: 20px;
    text-decoration: none;
    &.active {
        color: #ef5777;
        font-weight: bold;
    }
    &:hover {
        background-color: transparent !important;
        font-weight: 600;
    }
`

const ExternalLink = styled.a`
    font-size: 1.3em;
    color: #1e272e;
    white-space: normal;
    border-radius: 2px;
    padding: 5px 7px;
    line-height: 20px;
    text-decoration: none;
    &.active {
        color: #ef5777;
        font-weight: bold;
    }
    &:hover {
        background-color: transparent !important;
        font-weight: 600;
    }
`

export { Link, ExternalLink }
