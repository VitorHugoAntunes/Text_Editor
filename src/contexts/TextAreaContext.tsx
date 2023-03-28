import { createContext, type ReactNode, useState, useEffect } from 'react'

interface TextAreaContextType {
    text: string
    setText: (value: string) => void
}

interface TextAreaProviderProps {
    children: ReactNode
}

export const TextAreaContext = createContext({} as TextAreaContextType)

export function TextAreaProvider({ children }: TextAreaProviderProps) {
    const [text, setText] = useState('')

    useEffect(() => {
        console.log(text)
    }, [text])

    return (
        <TextAreaContext.Provider
            value={{
                text,
                setText,
            }}
        >
            {children}
        </TextAreaContext.Provider>
    )
}
