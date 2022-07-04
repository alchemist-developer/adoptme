import { Form, FormCheck } from "react-bootstrap";
import styled from "styled-components";

interface props{
    display: boolean;
}

export const StyledForm = styled(Form)<props>`
    background-color: white;
    padding: ${props => props.display ? '0% 0% 4% 0%' : '4% 2%'} ;
    min-height: 100vh;

`

export const Check = styled(FormCheck)`
    margin: 5% 0;
    font-size: 12px;
`

export const DivButton = styled.div`
    padding: 0 2%;
`