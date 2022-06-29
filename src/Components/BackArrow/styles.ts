import { Link } from "react-router-dom";
import styled from "styled-components";

interface props{
    display: string;
}

export const Arrow = styled.div<props>`
    position: absolute;
    height: 100%;
    display: ${props=>props.display == 'center' ? 'block' : 'none'};
    z-index: 999;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`