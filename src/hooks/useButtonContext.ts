import { useContext } from 'react'
import { ButtonContext } from '../contexts/ButtonContext'

export function useButtonContext() {
  const {
    boldActive,
    italicActive,
    underlineActive,
    uppercaseActive,
    indentActive,
    changeItalicStatus,
    changeBoldStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard
  } = useContext(ButtonContext)

  return {
    boldActive,
    italicActive,
    underlineActive,
    uppercaseActive,
    indentActive,
    changeItalicStatus,
    changeBoldStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard
  }
}
