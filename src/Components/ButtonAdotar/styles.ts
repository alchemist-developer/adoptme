import styled from "styled-components";

interface props{
    color: string;
}

export const Button = styled.button<props>`
    color: ${(props)=>props.color == 'white' ? 'black' : 'white'};
    width: 100%;
    margin-bottom: 2%;
    padding: 4%;
    background: ${(props)=>props.color};
    height: 64px;
    border-radius: 8px;
    padding: 24px, 120px, 24px, 120px;

`