import { createContext, type ReactNode, useState } from 'react'

interface InputContextType {
  fontSize: number
  lineSpacing: number
  setFontSize: (value: number) => void
  setLineSpacing: (value: number) => void
}

interface InputProviderProps {
  children: ReactNode
}

export const InputContext = createContext({} as InputContextType)

export function InputProvider({ children }: InputProviderProps) {
  const [fontSize, setFontSize] = useState<number>(14)
  const [lineSpacing, setLineSpacing] = useState<number>(1)

  return (
    <InputContext.Provider
      value={{
        fontSize,
        lineSpacing,
        setFontSize,
        setLineSpacing
      }}
    >
      {children}
    </InputContext.Provider>
  )
}
