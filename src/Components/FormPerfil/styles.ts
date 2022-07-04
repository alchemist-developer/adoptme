import { Form, FormCheck } from "react-bootstrap";
import styled from "styled-components";

interface props{
    display: boolean;
}

export const StyledForm = styled(Form)<props>`
    background-color: ${props => props.display ? 'white' : '#C9D7C4;'};
    padding: 4% 2%;
`

export const Check = styled(FormCheck)`
    margin: 5% 0;
    font-size: 12px;
`