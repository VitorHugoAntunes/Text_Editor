import { useContext } from 'react'
import { TextAreaContext } from '../contexts/TextAreaContext'

export function useTextAreaContext() {
    const {
        text,
        setText
    } = useContext(TextAreaContext)

    return {
        text,
        setText
    }
}
