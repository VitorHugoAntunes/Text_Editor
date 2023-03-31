import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
  -ms-wrap-margin: 1rem;

  > section {
    display: flex;
    justify-content: center;
    align-items: center;

    > input::-webkit-outer-spin-button,
    > input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    *[type='number'] {
      -moz-appearance: textfield;
    }

    > button:first-child, div:first-child, input:first-child{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    > button:last-child, button + div > button, div:last-child,input:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    body.dark & > button:not(:last-child),body.dark & > div:first-child,body.dark & > div.toggle:not(:last-child) {
      border-right: 1px solid ${(props) => props.theme['gray-600']};
    }

    > div:last-child {
      border: none;
    }

    > div.menuToggle{
      position: relative;

      > ul.menuList {
        position: absolute;
        background: ${props => props.theme['gray-900']};
        list-style: none;
        top: 0;
        left: 4rem;
        display: flex;
        flex-direction: column;
        border-radius: 4px;

        a {
          text-decoration: none;
          color: ${props => props.theme['gray-100']};
        }

        li {
          padding: 1rem;
          min-width: 9rem;
          width: 100%;
          display:flex;
          align-items: center;
          cursor: pointer;

          &:hover {
            transition: 0.2s;
            background: ${(props) => props.theme['gray-800']};
          }
        }
      }
    }
  }
`

export const TextStyleSection = styled.section``
export const TextAlignSection = styled.section``
export const TextSpacingSection = styled.section``
export const LinkSection = styled.section``
export const MoreActionsSection = styled.section``
