import { type ButtonHTMLAttributes, type ReactNode, useState } from 'react'
import { useButtonContext } from '../../hooks/useButtonContext'
import { useTextAreaContext } from '../../hooks/useTextAreaContext'

import { ButtonComponent } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  typeButton: string
}

export function Button({ icon, typeButton, ...props }: ButtonProps) {
  const [buttonActive, setButtonActive] = useState(false)

  const {
    changeBoldStatus,
    changeItalicStatus,
    changeUnderlineStatus,
    changeUppercaseStatus,
    changeIndentStatus,
    copyTextToClipboard,
    changeMenuStatus
  } = useButtonContext()

  const { text } = useTextAreaContext()

  function handleActiveButton() {
    buttonActive === true ? setButtonActive(false) : setButtonActive(true)
  }

  function handleChangeButtonStatus(type: string) {
    switch (type) {
      case 'bold':
        return [handleActiveButton(), changeBoldStatus()]
      case 'italic':
        return [handleActiveButton(), changeItalicStatus()]
      case 'underline':
        return [handleActiveButton(), changeUnderlineStatus()]
      case 'uppercase':
        return [handleActiveButton(), changeUppercaseStatus()]
      case 'indent':
        return [handleActiveButton(), changeIndentStatus()]
      case 'copyToClipboard':
        return [copyTextToClipboard(text)]
      case 'moreOptions':
        return [handleActiveButton(), changeMenuStatus()]
    }
  }
  return (
    <ButtonComponent
      onClick={() => handleChangeButtonStatus(typeButton)}
      {...props}
      isActive={buttonActive}
    >
      {icon}
    </ButtonComponent>
  )
}
