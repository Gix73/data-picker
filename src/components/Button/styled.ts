import styled from "styled-components";

interface Props {
    $bgColor: string;
}

export const ButtonS = styled.button<Props>`
background-color: ${(props)=> props.$bgColor ? props.$bgColor : "green"};
`