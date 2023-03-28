import {
  type FormEvent,
  type InputHTMLAttributes,
} from 'react'
import { useInputContext } from '../../hooks/useInputContext'
import { InputComponent } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  typeButton: string
}

export function Input({ typeButton, size, ...props }: InputProps) {
  const { fontSize, setFontSize } = useInputContext()

  function handleFontSize(event: FormEvent<HTMLInputElement>) {
    setFontSize(Number(event.currentTarget.value))
  }

  return (
    <InputComponent
      {...props}
      onChange={handleFontSize}
      value={fontSize}
    ></InputComponent>
  )
}
