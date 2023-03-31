import styled, { css } from 'styled-components'

interface ButtonProps {
  isActive?: boolean
}

export const ButtonComponent = styled.button<ButtonProps>`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => props.theme['gray-900']};
  cursor: pointer;

  > svg {
    color: ${(props) => props.theme['gray-100']};
  }

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['gray-800']};
  }

  &.buttonActive {
    background: ${(props) => props.theme['gray-600']};
  }
`
