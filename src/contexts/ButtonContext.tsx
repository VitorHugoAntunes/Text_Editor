import { createContext, type ReactNode, useState } from 'react'
import { toast } from 'react-hot-toast'

interface ButtonContextType {
  boldActive: boolean
  italicActive: boolean
  underlineActive: boolean
  uppercaseActive: boolean
  indentActive: boolean
  menuActive: boolean
  theme: string
  changeBoldStatus: () => void
  changeItalicStatus: () => void
  changeUnderlineStatus: () => void
  changeUppercaseStatus: () => void
  changeIndentStatus: () => void
  copyTextToClipboard: (text: string) => void
  changeMenuStatus: () => void
  setMenuActive: (menuActive: boolean) => void
  changeTheme: () => void
}

interface ButtonProviderProps {
  children: ReactNode
}

export const ButtonContext = createContext({} as ButtonContextType)

export function ButtonProvider({ children }: ButtonProviderProps) {
  const [boldActive, setBoldActive] = useState(false)
  const [italicActive, setItalicActive] = useState(false)
  const [underlineActive, setUnderlineActive] = useState(false)
  const [uppercaseActive, setUppercaseActive] = useState(false)
  const [indentActive, setIndentActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const [theme, setTheme] = useState('dark')

  function changeBoldStatus() {
    boldActive ? setBoldActive(false) : setBoldActive(true)
  }

  function changeItalicStatus() {
    italicActive ? setItalicActive(false) : setItalicActive(true)
  }

  function changeUnderlineStatus() {
    underlineActive ? setUnderlineActive(false) : setUnderlineActive(true)
  }

  function changeUppercaseStatus() {
    uppercaseActive ? setUppercaseActive(false) : setUppercaseActive(true)
  }

  function changeIndentStatus() {
    indentActive ? setIndentActive(false) : setIndentActive(true)
  }

  function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast.success('Texto copiado com sucesso')
  }

  function changeMenuStatus() {
    menuActive ? setMenuActive(false) : setMenuActive(true)
  }

  function changeTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <ButtonContext.Provider
      value={{
        boldActive,
        italicActive,
        underlineActive,
        uppercaseActive,
        indentActive,
        menuActive,
        theme,
        changeBoldStatus,
        changeItalicStatus,
        changeUnderlineStatus,
        changeUppercaseStatus,
        changeIndentStatus,
        copyTextToClipboard,
        changeMenuStatus,
        setMenuActive,
        changeTheme
      }}
    >
      {children}
    </ButtonContext.Provider>
  )
}
