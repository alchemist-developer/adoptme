import { FormControl } from "react-bootstrap";
import styled from "styled-components";

interface props{
    color: string;
}

export const Input = styled(FormControl)<props>`
    width: 100%;
    border-radius: 10px;
    border: ${props => props.color ? '1px solid red': '1px solid black' };
    padding: 2%;
    :focus{
        box-shadow: none;
        border: 1px solid black;
        outline: none;
    }
`

export const Label = styled.label`
    margin-top: 7%;
`