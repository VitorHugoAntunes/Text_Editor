import { useContext } from 'react'
import { ButtonContext } from '../contexts/ButtonContext'

export function useButtonContext() {
  const {
    boldActive,
    italicActive,
    underlineActive,
    uppercaseActive,
    indentActive,
    menuActive,
    changeItalicStatus,
    changeBoldStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard,
    changeMenuStatus
  } = useContext(ButtonContext)

  return {
    boldActive,
    italicActive,
    underlineActive,
    uppercaseActive,
    indentActive,
    menuActive,
    changeItalicStatus,
    changeBoldStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard,
    changeMenuStatus
  }
}
