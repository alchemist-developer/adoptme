import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface props{
    open?: boolean;
    display?: boolean;
    margin?: string;
}

export const StyledIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5%;
`

export const StyledLink = styled(Link)<props>`
    text-decoration: none;
    color: black;
    margin-top: ${props => props.margin};
    display: ${props =>props.display ? 'block' : 'none'};
`