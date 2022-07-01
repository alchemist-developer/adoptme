import { FormControl } from "react-bootstrap";
import styled from "styled-components";

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
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10%;

`

export const Input = styled(FormControl)`
    display: none;
`

export const Label = styled.label`
    margin-top: 7%;
`