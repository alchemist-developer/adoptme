import React from "react";
import * as S from "./styled";

const Container = ({children}:{children: React.ReactNode}) => (
    <S.BodyContainer color="yellow">
        {children}
    </S.BodyContainer>
)

export default Container;