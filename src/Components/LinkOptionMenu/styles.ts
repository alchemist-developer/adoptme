import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface props{
    open?: boolean;
    display?: boolean;
    margin?: string;
}

export const StyledIcon = styled.img`
    width: 10%;
    height: 80%;
    margin-right: 5%;
`

export const StyledLink = styled(Link)<props>`
    text-decoration: none;
    color: black;
    margin-top: ${props => props.margin};
    display: ${props =>props.display ? 'block' : 'none'};
`