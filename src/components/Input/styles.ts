import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-100']};
  text-align: center;
  font-size: 1rem;

  svg {
    color: ${props => props.theme['gray-100']};
  }

  .inputDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 2.8rem;
    gap: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none; // ARRUMAAAAAAAAAAAAAR
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;

    &:hover {
      transition: 0.2s;
      background: ${(props) => props.theme['gray-800']};
    }
  }
`

export const InputComponent = styled.span`
  border: none;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
`
