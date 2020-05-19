import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Sidebar from '~/layouts/sidebar'
import Main from '~/layouts/main'
import { ThemeProvider } from '~/layouts/context'

const GlobalStyle = createGlobalStyle`
  body {
    margin:0px;
    font-family: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,Icons16,sans-serif';
  }
`

const Container = styled.div`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: auto;
    min-height: 100vh;
`

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <ThemeProvider>
                <Container>
                    <Sidebar />
                    <Main />
                </Container>
            </ThemeProvider>
        </Router>
    )
}
render(React.createElement(App), document.getElementById('root'))

export default App
