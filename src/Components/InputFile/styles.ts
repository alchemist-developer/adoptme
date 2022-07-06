import { FormControl } from "react-bootstrap";
import styled from "styled-components";

interface props{
    color: string;
}

export const StyledP = styled.p`
    margin: 0;
    font-size: 16px;
`

export const StyledDiv = styled.div`
    display: flex;
`

export const Img = styled.img`
    width: 150px;
    height: 120px;

`

export const StyledLabel = styled.label`
    margin-top: 2%;
    border: 1px solid black;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 3% 0px;
`

export const StyledDivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3%;

`

export const Input = styled(FormControl)`
    display: none;
`

export const InputText = styled.input<props>`
    background-color: white;
    text-align: center;
    border-radius: 10px;
    padding: 3% 0px;
    border: ${props => props.color ? '1px solid red': '1px solid black' };
`

export const Label = styled.label`
    margin-top: 7%;
`