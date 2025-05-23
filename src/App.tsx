import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Home } from './home'
import {HashRouter} from 'react-router-dom'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
       <GlobalStyle></GlobalStyle>
       <HashRouter>
       <Home></Home>
        </HashRouter>

    </ThemeProvider>
  )
}


