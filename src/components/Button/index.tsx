import { type ButtonHTMLAttributes, type ReactNode, useState } from 'react'
import { useButtonContext } from '../../hooks/useButtonContext'
import { useToggleContext } from '../../hooks/useToggleContext'

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
  } = useButtonContext()

  function handleActiveButton() {
    buttonActive === true ? setButtonActive(false) : setButtonActive(true)
  }

  function handleChangeButtonStatus(type: string) {
    switch (type) {
      case 'bold':
        handleActiveButton();
        changeBoldStatus()
        break;
      case 'italic':
        handleActiveButton();
        changeItalicStatus();
        break;
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
