import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

interface props{
    open?: boolean;
    width?: number;
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
    display: flex;
    color: black;
    background-color: transparent;
    justify-content: end;
    width: ${props=>props.width}%;
    border: none;
    display: ${props =>props.open ? 'flex': 'none'};
`

export const StyledImg = styled.img`
    width: 10%;
`

export const StyledDivLink = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
`

export const StyledA = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 2%;
    &:hover{
        color: black;
    }
`

export const StyledButtonClose = styled(AiOutlineClose)`
    margin: auto 0;
`

export const StyledTeste = styled.div`
    position: absolute;
    z-index: 9999;
    width: 100%;
    display: flex;
    justify-content: end;
`