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
export const H1 = styled.h1`
    text-align: center;
    font-weight: bold;

`
export const P = styled.p`
    text-align: center;
    font-size: 15px;
    margin: 0%;
`

