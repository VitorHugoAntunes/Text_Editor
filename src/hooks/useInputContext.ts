import { useContext } from 'react'
import { InputContext } from '../contexts/InputContext'

export function useInputContext() {
  const { fontSize, lineSpacing, setFontSize, setLineSpacing } = useContext(InputContext)

  return {
    fontSize,
    lineSpacing,
    setFontSize,
    setLineSpacing
  }
}
