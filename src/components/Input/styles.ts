import styled from 'styled-components'

export const InputComponent = styled.input`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-100']};
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['gray-800']};
  }
`
