import { useContext } from 'react'
import { InputContext } from '../contexts/InputContext'

export function useInputContext() {
  const { fontSize, setFontSize } = useContext(InputContext)

  return {
    fontSize,
    setFontSize,
  }
}
