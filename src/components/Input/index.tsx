import {
  type InputHTMLAttributes,
} from 'react'
import { useInputContext } from '../../hooks/useInputContext'

import { Plus, Minus, ArrowsOutLineVertical, TextAa } from 'phosphor-react'

import { InputComponent, InputContainer } from './styles'
import { useButtonContext } from '../../hooks/useButtonContext'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  typeButton: string
}

export function Input({ typeButton, size, ...props }: InputProps) {
  const { fontSize, lineSpacing, setFontSize, setLineSpacing } = useInputContext()

  function increment(type: string) {
    switch (type) {
      case 'fontSize':
        if (fontSize < 30) {
          return setFontSize(fontSize + 1)
        }
        break;
      case 'lineSpacing':
        if (lineSpacing < 2) {
          return setLineSpacing(lineSpacing + 0.1)
        }
        break;
    }
  }

  function decrement(type: string) {
    switch (type) {
      case 'fontSize':
        if (fontSize > 8) {
          return setFontSize(fontSize - 1)
        }
        break;
      case 'lineSpacing':
        if (lineSpacing > 1) {
          return setLineSpacing(lineSpacing - 0.1)
        }
        break;
    }
  }

  return (
    <InputContainer className='inputContainerDiv'>
      <div title={typeButton === 'lineSpacing' ? 'Espaçamento de linha' : 'Tamanho de fonte'} className="inputDiv">
        {typeButton === 'lineSpacing' ? (
          <ArrowsOutLineVertical size={20} />
        ) : (
          <TextAa size={20} />
        )}
        <InputComponent
          {...props}
        >
          {typeButton === 'fontSize' ? fontSize : lineSpacing.toFixed(1)}
        </InputComponent>
      </div>
      <button title='Diminuir' onClick={() => decrement(typeButton)}><Minus size={20} /></button>
      <button title='Aumentar' onClick={() => increment(typeButton)}><Plus size={20} /></button>
    </InputContainer>
  )
}
