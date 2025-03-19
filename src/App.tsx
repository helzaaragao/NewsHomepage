import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Home } from './home'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
       <GlobalStyle></GlobalStyle>
       <Home></Home>
    </ThemeProvider>
  )
}


