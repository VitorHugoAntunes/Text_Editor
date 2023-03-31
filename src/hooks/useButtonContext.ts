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
    theme,
    changeItalicStatus,
    changeBoldStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard,
    changeMenuStatus,
    setMenuActive,
    changeTheme
  } = useContext(ButtonContext)

  return {
    boldActive,
    italicActive,
    underlineActive,
    uppercaseActive,
    indentActive,
    menuActive,
    theme,
    changeItalicStatus,
    changeBoldStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard,
    changeMenuStatus,
    setMenuActive,
    changeTheme
  }
}
