import styled from "styled-components";

interface props{
    color: string;
}

export const Button = styled.button<props>`
    width: 100%;
    margin-bottom: 2%;
    padding: 4%;
    background: ${(props)=>props.color};
`