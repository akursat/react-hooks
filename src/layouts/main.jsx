import React, { useContext } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import UseStatePage from '~/pages/use-state-page'
import UseEffectPage from '~/pages/use-effect-page'
import UseReducerPage from '~/pages/use-reducer-page'
import UseContextPage from '~/pages/use-context-page'
import UseRefPage from '~/pages/use-ref-page'
import UseMemoPage from '~/pages/use-memo-page'
import UseCallbackPage from '~/pages/use-callback-page'
import StartPage from '~/pages/start-page'
import AboutHooksPage from '~/pages/about-page'

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
    & h1 {
        color: ${(props) => (props.isDark ? 'darkgoldenrod' : '#ef5777')};
    }
    padding-top: 50px;
`

const Content = styled.div`
    position: relative;
    max-width: 830px;
    padding: 0 5px 40px 40px;
    > h1 {
        line-height: 40px;
        font-size: 36px;
        color: #ef5777;
        font-weight: 600;
    }
`

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <StartPage />,
    },
    {
        path: '/about-hooks',
        exact: true,
        main: () => <AboutHooksPage />,
    },
    {
        path: '/use-state',
        exact: true,
        main: () => <UseStatePage />,
    },
    {
        path: '/use-effect',
        exact: true,
        main: () => <UseEffectPage />,
    },
    {
        path: '/use-reducer',
        exact: true,
        main: () => <UseReducerPage />,
    },
    {
        path: '/use-context',
        exact: true,
        main: () => <UseContextPage />,
    },
    {
        path: '/use-ref',
        exact: true,
        main: () => <UseRefPage />,
    },
    {
        path: '/use-memo',
        exact: true,
        main: () => <UseMemoPage />,
    },
    {
        path: '/use-callback',
        exact: true,
        main: () => <UseCallbackPage />,
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
