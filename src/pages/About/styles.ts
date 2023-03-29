import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const AboutHeaderContainer = styled.div`
    flex: 1;
    display:flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    .link {
        position: absolute;
        display: flex;
        align-items:center;
        justify-content:center;

        svg {
            color: ${props => props.theme["gray-100"]};
            transition: 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }
    }

    .title {
        margin: 0 auto;
    }
`