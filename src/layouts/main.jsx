import React, { useContext } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import UseStatePage from '~/pages/use-state-page'
import UseEffectPage from '~/pages/use-effect-page'
import UseReducerPage from '~/pages/use-reducer-page'
import UseContextPage from '~/pages/use-context-page'
import { ThemeContext } from '~layouts/context'

const Wrapper = styled.main`
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 830px;
    -webkit-box-align: start;
    align-items: flex-start;
    outline: none;
    background-color: ${(props) => (props.isDark ? '#394b59' : '#f5f8fa')};
    & p,
    h1 {
        color: ${(props) => (props.isDark ? 'darkgoldenrod' : '#182026')};
    }
`

const Content = styled.div`
    position: relative;
    max-width: 830px;
    padding: 0 5px 40px 40px;
    > h1 {
        line-height: 40px;
        font-size: 36px;
        color: #182026;
        font-weight: 600;
    }
`

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <h1>Home</h1>,
    },
    {
        path: '/about-hooks',
        main: () => <h1>About hooks</h1>,
    },
    {
        path: '/use-state',
        main: () => <UseStatePage />,
    },
    {
        path: '/use-effect',
        main: () => <UseEffectPage />,
    },
    {
        path: '/use-reducer',
        main: () => <UseReducerPage />,
    },
    {
        path: '/use-context',
        main: () => <UseContextPage />,
    },
]

function Main() {
    const isDark = useContext(ThemeContext)
    return (
        <Wrapper isDark={isDark}>
            <Content>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))}
                </Switch>
            </Content>
        </Wrapper>
    )
}

export default Main
