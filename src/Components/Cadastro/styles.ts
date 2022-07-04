import styled from "styled-components";

interface props{
    display: boolean;
}

export const SytledDiv = styled.div<props>`
    background-color: #FFFFFF;
    display: ${props =>props.display ? 'block' : 'none'};
`

export const DivInput = styled.div<props>`
    padding: ${props => props.display ? '0 2%': '0'};
`

export const Img = styled.img`
    width: 100%;
`

