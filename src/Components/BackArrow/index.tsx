import * as S from './styles';

interface Props{
  display: string;
}

const BackArrow = ({display}: Props) => {
  return (
    <S.Arrow display={display} >
        seta
    </S.Arrow>
  )
}

export default BackArrow;