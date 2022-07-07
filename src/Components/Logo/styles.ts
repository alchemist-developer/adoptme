import { Link } from "react-router-dom";
import styled from "styled-components";

interface props{
    margin: string;
}

export const Img = styled.img`
    width: 100%;

`

export const StyledLink = styled(Link)<props>`
    margin: ${props => props.margin == 'center' ? '1% auto;': '1% 0% 0% 1%;'};
    margin-bottom: 1%;
    width: 50%;
    z-index: 89;
`