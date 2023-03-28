import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

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

    > button:first-child, div:first-child{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    > button:last-child, div:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    > button:not(:last-child), div:not(:last-child) {
      border-right: 1px solid ${(props) => props.theme['gray-600']};
    }
  }
`

export const TextStyleSection = styled.section``
export const TextAlignSection = styled.section``
export const TextSpacingSection = styled.section``
export const LinkSection = styled.section``
export const MoreActionsSection = styled.section``
