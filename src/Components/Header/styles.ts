import styled from 'styled-components'

interface props{
    position: string;
    background: string;
    display: boolean;
}

export const StyledDiv = styled.div<props>`
    position: ${props=>props.position == 'center' ? 'relative' : 'absolute'};
    z-index: 99;
    display: flex;
    justify-content: space-between;
    min-height: 38px;
    width: 100%;
    background: ${props =>props.background};
    display: ${props =>props.display ? 'flex' : 'none'};
`

