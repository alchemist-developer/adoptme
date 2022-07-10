import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import cat from '../../assets/gato2.jpg'
import * as S from './styles';

interface Props{
  name_pet: string;
  description_pet: string;
}

const CardAdmin = (props: Props) => {
  return (
    <S.StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={cat}
          alt="imagem do animal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name_pet}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description_pet}
          </Typography>
        </CardContent>
      </CardActionArea>
    </S.StyledCard>
  );
}

export default CardAdmin;