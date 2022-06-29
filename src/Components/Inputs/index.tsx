import { Fragment } from 'react';
import * as S from './styles';

interface Props{
  textLabel: string;
  typeInput?: string;
  rows?: number;
  as?: any;
  id: string;
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;

}

const Inputs = ({textLabel, typeInput, rows, as, id, value, onchange, pattern}: Props) => {
  return (
    <Fragment>
        <S.Label>
          {textLabel}
        </S.Label>
        <S.Input 
          type={typeInput}
          as = {as}
          rows = {rows}
          id={id}
          value={value}
          onChange ={onchange}
          pattern={pattern}  
        />
    </Fragment>

  )
}

export default Inputs;