import styled from "styled-components";

interface props{
    display: string;
}

export const Arrow = styled.div<props>`
    background-color: aquamarine;
    position: absolute;
    height: 100%;
    display: ${props=>props.display == 'center' ? 'block' : 'none'};
`