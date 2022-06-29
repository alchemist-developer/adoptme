import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface props{
    open?: boolean;
}

export const Option = styled.div<props>`
    width: 60%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 1%;
    background-color: white;
    padding: 2%;
    display: ${props =>props.open ? 'none': 'flex'};
`

export const StyledDivClose = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledButton = styled.button<props>`
    color: black;
    background-color: transparent;
    justify-content: end;
    padding: 0;
    width: 10%;
    border: none;
    display: ${props =>props.open ? 'flex': 'none'};
`

export const StyledImg = styled.img`
    width: 100%;
`

export const StyledDivLink = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
`

export const StyledTeste = styled.div`
    position: absolute;
    z-index: 88;
    width: 100%;
    display: flex;
    justify-content: end;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`