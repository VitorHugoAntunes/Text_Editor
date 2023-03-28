import styled from "styled-components";

export const ToggleContainer = styled.div`
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

  > svg {
    color: ${(props) => props.theme['gray-100']};
  }

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['gray-800']};
  }

  &.active {
    background: ${(props) => props.theme['gray-600']};
  }
`