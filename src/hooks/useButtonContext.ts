import { useContext } from 'react'
import { ButtonContext } from '../contexts/ButtonContext'

export function useButtonContext() {
  const {
    boldActive,
    italicActive,
    changeItalicStatus,
    changeBoldStatus,
  } = useContext(ButtonContext)

  return {
    boldActive,
    italicActive,
    changeItalicStatus,
    changeBoldStatus,
  }
}
