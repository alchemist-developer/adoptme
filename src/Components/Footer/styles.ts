import { Link } from "react-router-dom";
import styled from "styled-components";

interface props{
    marginBottom?: number;
}

export const StyledContainer = styled.div`
    background-color:  #1E1E1E;
    padding: 2% 0% 4% 4%;
    margin-top: 4%;
    color: white;
    display: flex;
    flex-direction: column;
`

export const Img = styled.img`
    width: 20%;
`

export const StyledLink = styled(Link)`
    color: white;
`

export const P = styled.p<props>`
    text-decoration: underline;
`

export const RightReserved = styled.p`
    margin-top: 4%;
`