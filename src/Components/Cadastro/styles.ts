import styled from "styled-components";

interface props{
    display: boolean;
}

export const SytledDiv = styled.div<props>`
    background-color: #FFFFFF;
    display: ${props =>props.display ? 'block' : 'none'};
    
`

export const Img = styled.img`
    width: 100%;
`

