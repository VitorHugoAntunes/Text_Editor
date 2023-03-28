import jsPDF from 'jspdf'
import { type FormEvent, useState, useEffect, useRef } from 'react'
import { useButtonContext } from '../../hooks/useButtonContext'
import { useInputContext } from '../../hooks/useInputContext'
import { useTextAreaContext } from '../../hooks/useTextAreaContext'
import { useToggleContext } from '../../hooks/useToggleContext'
import { TextareaContainer } from './styles'

export function TextSection() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { boldActive, italicActive } =
    useButtonContext()
  const { fontSize } = useInputContext()
  const { alignLeftActive, centerTextActive, alignRightActive } = useToggleContext();
  const { text, setText } = useTextAreaContext()

  function changeUserText(event: FormEvent<HTMLTextAreaElement>) {
    const userText = event.currentTarget.value
    setText(userText)
  }

  return (
    <TextareaContainer
      ref={textAreaRef}
      placeholder="Escreva seu texto aqui..."
      bold={boldActive}
      italic={italicActive}
      alignLeft={alignLeftActive}
      alignRight={alignRightActive}
      centerText={centerTextActive}
      fontSize={fontSize}
      value={text}
      onChange={changeUserText}
    >
    </TextareaContainer>
  )
}
