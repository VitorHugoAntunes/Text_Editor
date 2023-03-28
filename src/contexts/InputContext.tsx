import { createContext, type ReactNode, useState } from 'react'

interface InputContextType {
  fontSize: number
  setFontSize: (value: number) => void
}

interface InputProviderProps {
  children: ReactNode
}

export const InputContext = createContext({} as InputContextType)

export function InputProvider({ children }: InputProviderProps) {
  const [fontSize, setFontSize] = useState<number>(14)

  return (
    <InputContext.Provider
      value={{
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </InputContext.Provider>
  )
}
