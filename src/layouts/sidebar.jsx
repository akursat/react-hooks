import React from 'react'
import styled from 'styled-components'
import { Link, ExternalLink } from '~components/link'

const Wrapper = styled.div`
    background-color: #d2dae2;
    flex-basis: 270px;
    position: relative;
    z-index: 10;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    > img {
        background-color: slategray;
    }
`

const Ul = styled.ul`
    margin-bottom: 5px;
    padding-left: 15px;
`

const Li = styled.li`
    padding: 0;
    display: list-item;
    list-style: none;
    align-items: center;
    padding-right: 10px;
    padding-left: 0;
    padding-bottom: 5px;
`

const sidebar = [
    {
        to: '/',
        label: '1 - Başlangıç',
    },
    {
        to: '/about-hooks',
        label: "2 - Hook'lar Hakkında",
    },
    {
        to: '/use-state',
        label: '3 - useState Hook',
    },
    {
        to: '/use-effect',
        label: '4 - useEffect Hook',
    },
    {
        to: '/use-reducer',
        label: '5 - useReducer Hook',
    },
    {
        to: '/use-ref',
        label: '6 - useRef Hook',
    },
    {
        to: '/use-context',
        label: '7 - useContext Hook',
    },
    {
        to: '/use-memo',
        label: '8 - useMemo Hook',
    },
    {
        to: '/use-callback',
        label: '9 - useCallback Hook',
    },
    {
        to: undefined,
        label: '11 - Custom Hook ↬',
        href: 'https://github.com/beautifulinteractions/beautiful-react-hooks',
    },
    {
        to: undefined,
        label: '12 - Github ↬',
        href: 'https://github.com/akursat/react-hooks',
    },
]

function Sidebar() {
    return (
        <Wrapper>
            <img
                src={
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                }
            />
            ,
            <Ul>
                {sidebar.map((obj) => (
                    <Li>
                        {obj.to !== undefined ? (
                            <Link exact to={obj.to}>
                                {obj.label}
                            </Link>
                        ) : (
                            <ExternalLink href={obj.href} target="_blank">
                                {obj.label}
                            </ExternalLink>
                        )}
                    </Li>
                ))}
            </Ul>
        </Wrapper>
    )
}

export default Sidebar
