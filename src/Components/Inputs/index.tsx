import { Fragment } from 'react';
import * as S from './styles';

interface Props{
  textLabel: string;
  typeInput?: string;
  rows?: number;
  as?: any;
}

const Inputs = ({textLabel, typeInput, rows, as}: Props) => {
  return (
    <Fragment>
        <S.Label>
          {textLabel}
        </S.Label>
        <S.Input 
          type={typeInput}
          as = {as}
          rows = {rows}

        />
    </Fragment>

  )
}

export default Inputs;