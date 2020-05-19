import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`
    background-color: #d2dae2;
    flex-basis: 270px;
    position: relative;
    z-index: 10;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
`

const Ul = styled.ul`
    margin-bottom: 5px;
`

const Li = styled.li`
    padding: 0;
    display: list-item;
    list-style: none;
    align-items: center;
    padding-right: 10px;
    padding-left: 0;
`

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

function Sidebar() {
    return (
        <Wrapper>
            <Ul>
                <Li>
                    <Link to="/" exact>
                        1 - Home
                    </Link>
                </Li>
                <Li>
                    <Link to="/about-hooks">2 - About Hooks</Link>
                </Li>
                <Li>
                    <Link to="/use-state">3 - useState Hook</Link>
                </Li>
                <Li>
                    <Link to="/use-effect">4 - useEffect Hook</Link>
                </Li>
                <Li>
                    <Link to="/use-reducer">5 - useReducer Hook</Link>
                </Li>
                <Li>
                    <Link to="/use-ref">6 - useRef Hook</Link>
                </Li>
                <Li>
                    <Link to="/use-context">7 - useContext Hook</Link>
                </Li>
                <Li>
                    <Link to="/use-custom">8 - useCustom Hook</Link>
                </Li>
            </Ul>
        </Wrapper>
    )
}

export default Sidebar
