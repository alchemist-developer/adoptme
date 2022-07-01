import { Container } from "react-bootstrap";
import styled from "styled-components";

interface props{
    color: string;
}

export const SytledContainer = styled(Container)`
    margin-top: 10%;
`

export const A = styled.a`
    text-decoration: none;
    color: brown;
`

export const H4 = styled.h4<props>`
    color: ${props => props.color}
`