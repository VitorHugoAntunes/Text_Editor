import { ThemeProvider } from 'styled-components'
import { ButtonProvider } from './contexts/ButtonContext'
import { InputProvider } from './contexts/InputContext'
import { TextAreaProvider } from './contexts/TextAreaContext'
import { ToggleProvider } from './contexts/ToggleContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ButtonProvider>
        <ToggleProvider>
          <InputProvider>
            <TextAreaProvider>
              <Home />
            </TextAreaProvider>
          </InputProvider>

        </ToggleProvider>
      </ButtonProvider>
    </ThemeProvider>
  )
}

export default App
