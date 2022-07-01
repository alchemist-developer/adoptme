import styled from "styled-components";

interface props{
    margin: string;
}

export const Img = styled.img<props>`
    width: 11%;
    margin: ${props => props.margin == 'center' ? '1% auto;': '1% 0% 0% 1%;'};
    margin-bottom: 1%;
`