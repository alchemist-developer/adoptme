import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import './styles.css';
import { deletarPet } from '../../service/pet';
import { useSelector } from "react-redux";
import { RootState } from '../../store';
import baseAPI from "../../service/baseAPI";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface Props{
  name_pet: string;
  description_pet: string;
  imagem: string;
  id_pet: number;
}

const CardAdmin = (props: Props) => {

  const token = useSelector((state: RootState)=> state.persistedReducer.accessToken)
  const navigate = useNavigate()

  async function deletePet(){
    //@ts-ignore
    baseAPI.defaults.headers["Authorization"] = `Bearer ${token}`
    await deletarPet(props.id_pet)
    toast.warning('Pet deletado com sucesso!')
    window.location.reload()
  }

  return (
    <div className="card-admin">
      <CardActionArea>
        <CardMedia className="cards-meus-pets"
          component="img"
          style={{width: '250px', height: '250px'}}
          image={`http://res.cloudinary.com/luizatrocino/image/upload/` + props.imagem}
          alt="imagem do animal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name_pet}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {props.description_pet}
          </Typography> */}
        </CardContent>
        <Button onClick={deletePet} className='button-deletar' variant="contained" color='error'>Deletar</Button>
      </CardActionArea>
    </div>
  );
}

export default CardAdmin;