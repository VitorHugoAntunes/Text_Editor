import styled from "styled-components"

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const SubmitButtonComponent = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-900']};
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['gray-400']};
  }
`