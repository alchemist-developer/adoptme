import { FormControl } from "react-bootstrap";
import styled from "styled-components";

export const Input = styled(FormControl)`
    width: 100%;
    border-radius: 10px;
    :focus{
        box-shadow: none;
        border: 1px solid black;
    }

`

export const Label = styled.label`
    margin-top: 7%;
`