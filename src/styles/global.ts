import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['gray-400']};
      z-index: 3;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-font-smoothing: antialiased;
    }

    body.dark {
      background-color: ${(props) => props.theme['gray-800']};
      color: ${(props) => props.theme['gray-100']};
    }

    body.light {
      background-color: ${(props) => props.theme['white-300']};
      color: ${(props) => props.theme['gray-800']};

      .container,button, input, .toggle, ul {
        background-color: ${(props) => props.theme['white-100']};
        border: 1px solid ${(props) => props.theme['gray-300']};
        border-collapse: collapse;

        &:hover:not(.container) {
          background-color: ${(props) => props.theme['gray-100']};
        }
      }

      .toggle:last-child{
        border: 1px solid ${(props) => props.theme['gray-300']};
        border-collapse: collapse;
      }

      textarea {
        background-color: ${(props) => props.theme['white-300']};
        color: ${(props) => props.theme['gray-900']};
      }

      svg {
        color: ${(props) => props.theme['gray-700']};
      }

      .active, .buttonActive {
        background-color: ${(props) => props.theme['gray-100']};
      }

      .inputContainerDiv {
        background-color: ${(props) => props.theme['white-100']};
        
        & > div {
          border-top: 1px solid ${(props) => props.theme['gray-300']};
          border-left: 1px solid ${(props) => props.theme['gray-300']};
          border-bottom: 1px solid ${(props) => props.theme['gray-300']};
          border-collapse: collapse;
        }

        & span {
          background-color: ${(props) => props.theme['white-100']};
          color: ${(props) => props.theme['gray-700']};
        }

        & button {
            border-left: none;
            border-right: none;
        }
      }

      ul, li {
        background: ${(props) => props.theme['white-100']};
        color: ${(props) => props.theme['gray-700']};
      }

      #menuList a li:hover {
        transition: 0.2s;
        background: ${(props) => props.theme['gray-100']};
      }

      h2 {
        color: ${(props) => props.theme['gray-600']};
      }

      .link a svg {
        color: ${(props) => props.theme['gray-700']};
      }
      
    }

    body, input-security, textarea, button {
      font: 400 1rem Roboto, sans-serif;
    }
`
