import styled from 'styled-components'

export const LayoutContainer = styled.div``

export const EditorContainer = styled.div`
  flex: 1;
  display: flex;

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

  @media (max-width: 1390px) {
    /* For mobile phones: */

    #menuList {
      position: absolute;
        top: 4rem;
        left: -6rem;
    }
  }

  @media (max-width: 1120px) {
    /* For mobile phones: */

    width: 800px;
    max-width: 100%;
  }

  @media (max-width: 810px) {
    /* For mobile phones: */

    width: 500px;
    max-width: 100%;

    #menuList {
      position: absolute;
        top: 3rem;
        left: -7rem;
    }

    > div:first-child button,  div:first-child .toggle, div:first-child input{
      height: 1.9rem;
      width: 1.9rem;
      font-size: 0.875rem;

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

    #menuList {
      position: absolute;
        top: 3rem;
        left: -5.5rem;

        li {
          font-size: 0.7rem;
          min-width: 7rem;
        }
    }

    #submitText {
      justify-content: center;
    }

    h2 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.7rem;
    }

    > div:first-child button,  div:first-child .toggle, div:first-child input {
      height: 1.6rem;
      width: 1.6rem;
      font-size: 0.7rem;

      svg {
        height: 14px;
      }
    }
  }

  @media (max-width: 450px) {
    /* For mobile phones: */

    width: 350px;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;

    p {
      font-size: 0.6rem;
    }

    > div:first-child button,  div:first-child .toggle, div:first-child input {
      height: 1.4rem;
      width: 1.4rem;
      font-size: 0.6rem;

      svg {
        height: 12px;
      }
    }
  }
`
