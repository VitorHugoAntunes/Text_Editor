import styled, { css } from 'styled-components'

interface TextAreaProps {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  uppercase?: boolean
  alignLeft?: boolean
  centerText?: boolean
  alignRight?: boolean
  indent?: boolean
  fontSize: number
}

export const TextareaContainer = styled.textarea<TextAreaProps>`
  flex: 1;
  width: 100%;
  border-radius: 6px;
  resize: none;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['gray-600']};
  border: none;
  padding: 1.5rem;
  font-size: ${(props) => props.fontSize}px;

  ${(props) =>
    props.bold === true &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.italic === true &&
    css`
      font-style: italic;
    `}

  ${(props) =>
    props.underline === true &&
    css`
      text-decoration: underline;
    `}

  ${(props) =>
    props.uppercase === true &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.indent === true &&
    css`
      text-indent: 5rem;
    `}

  ${(props) =>
    props.centerText === true &&
    css`
      text-align: center;
      &::-webkit-input-placeholder {
        text-align: center;
      }

      &:-moz-placeholder {
        text-align: center;
      }
    `}

  ${(props) =>
    props.alignRight === true &&
    css`
      text-align: right;
      &::-webkit-input-placeholder {
        text-align: right;
      }

      &:-moz-placeholder {
        text-align: right;
      }
    `}
`
