import styled from "styled-components";

interface props{
    color: string;
    display: boolean;
    margin?: number;
}

export const Button = styled.button<props>`
    color: ${(props)=>props.color == 'white' ? 'black' : 'white'};
    width: 100%;
    margin-bottom: 0%;
    padding: 4%;
    margin-top: ${(props)=>props.margin}% ;
    background: ${(props)=>props.color};
    height: 64px;
    border-radius: 8px;
    padding: 24px, 120px, 24px, 120px;
    display: ${props => props.display ? 'block' : 'none'};
    


`