import styled from "styled-components";

const StyledDivProps = {
    width,
    backgroundColor
}

// interface StyledDivProps {
//     borderColor?: string;
//     backgroundColor?: string;
//     width?: string; 
// }

export const Container = styled.div<StyledDivProps>`
    padding: 0.8rem 1rem;
    width: ${(props) = props.width || '28rem'};
    display: flex;
    align-items: center;
    /* background-color: ${props => (props.background)}; */
    /* background-color: ${Theme.colors.yellow_300}; */
    border-radius: 0.6rem;
    &:focus-within{
        /* border: 2px solid ${props => props.borderColor || '#3498db'}; */
        outline: none;
        outline-offset: 0px;
    }
`;