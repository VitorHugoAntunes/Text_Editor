import { createContext, type ReactNode, useState } from 'react'

interface ButtonContextType {
  boldActive: boolean
  italicActive: boolean
  changeBoldStatus: () => void
  changeItalicStatus: () => void
}

interface ButtonProviderProps {
  children: ReactNode
}

export const ButtonContext = createContext({} as ButtonContextType)

export function ButtonProvider({ children }: ButtonProviderProps) {
  const [boldActive, setBoldActive] = useState(false)
  const [italicActive, setItalicActive] = useState(false)

  function changeBoldStatus() {
    boldActive ? setBoldActive(false) : setBoldActive(true)
  }

  function changeItalicStatus() {
    italicActive ? setItalicActive(false) : setItalicActive(true)
  }

  return (
    <ButtonContext.Provider
      value={{
        boldActive,
        italicActive,
        changeBoldStatus,
        changeItalicStatus,
      }}
    >
      {children}
    </ButtonContext.Provider>
  )
}
