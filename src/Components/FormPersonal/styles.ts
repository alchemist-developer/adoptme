import { FormCheck } from "react-bootstrap";
import styled from "styled-components";

interface props{
    display: boolean;
}

export const StyledDiv = styled.div<props>`
    display: ${props => props.display ? 'block' : 'none'};
    padding-bottom: 5%;
`

export const Check = styled(FormCheck)`
    margin: 5% 0;
    font-size: 12px;
`