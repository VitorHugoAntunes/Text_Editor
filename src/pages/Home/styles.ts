import styled from 'styled-components'

export const EditorContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  flex-direction: column;
  margin-top: 4rem;
  border-radius: 6px;
  padding: 2rem;
  gap: 2rem;

  width: 1120px;
  max-width: 100%;
  height: 80vh;
  max-height: 100%;

  background: ${(props) => props.theme['gray-700']};

  @media (max-width: 1120px) {
    /* For mobile phones: */

    width: 800px;
    max-width: 100%;
  }

  @media (max-width: 810px) {
    /* For mobile phones: */

    width: 500px;
    max-width: 100%;

    > div:first-child button {
      height: 1.9rem;
      width: 1.9rem;

      svg {
        height: 16px;
      }
    }
  }

  @media (max-width: 510px) {
    /* For mobile phones: */

    width: 400px;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;

    > div:first-child button {
      height: 1.6rem;
      width: 1.6rem;

      svg {
        height: 14px;
      }
    }
  }
`

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const SubmitButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-900']};
  cursor: pointer;
`
