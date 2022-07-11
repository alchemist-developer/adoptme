import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import './styles.css';

interface Props{
  name_pet: string;
  description_pet: string;
  imagem: string;
}

const CardAdmin = (props: Props) => {
  return (
    <div className="card-admin">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`http://res.cloudinary.com/luizatrocino/image/upload/` + props.imagem}
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
        <Button className='button-deletar' variant="contained" color='error'>Deletar</Button>
      </CardActionArea>
    </div>
  );
}

export default CardAdmin;