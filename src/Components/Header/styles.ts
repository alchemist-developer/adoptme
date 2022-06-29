import styled from 'styled-components'

interface props{
    position: string;
}

export const StyledDiv = styled.div<props>`
    position: ${props=>props.position == 'center' ? 'relative' : 'absolute'};
    z-index: 99;
    display: flex;
    justify-content: space-between;
    min-height: 32px;
    width: 100%;
`

