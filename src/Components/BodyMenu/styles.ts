import { Container } from "react-bootstrap";
import styled from "styled-components";

interface props{
    color?: string;
    bold?: string;
}

export const SytledContainer = styled(Container)`
    margin-top: 10%;
`

export const A = styled.a`
    text-decoration: none;
    color: brown;
`

export const H4 = styled.h4<props>`
    color: ${props => props.color};
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
`

export const H1 = styled.h1`
    color: black;
    font-weight: 900;
    margin-left: 0;
    font-size: 24px;
`

export const P = styled.p<props>`
    color: black;
    font-weight: ${props => props.bold};
    text-align: justify;
    margin-left: 0;
`

export const Img = styled.img`
    width: 8%;
    margin-left: 4%;
`

export const ImgBody = styled.img`
    width: 100%;
    border: 1px solid black;
    border-radius: 8px;
`
