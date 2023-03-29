import { ThemeProvider } from 'styled-components'
import { ButtonProvider } from './contexts/ButtonContext'
import { InputProvider } from './contexts/InputContext'
import { TextAreaProvider } from './contexts/TextAreaContext'
import { ToggleProvider } from './contexts/ToggleContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ButtonProvider>
        <ToggleProvider>
          <InputProvider>
            <TextAreaProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>

            </TextAreaProvider>
          </InputProvider>

        </ToggleProvider>
      </ButtonProvider>
    </ThemeProvider>
  )
}

export default App
