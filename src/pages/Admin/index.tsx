import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../components/BackArrow";
import CardAdmin from "../../components/CardAdmin";
import Header from "../../components/Header";
import LinkOptionMenu from "../../components/LinkOptionMenu";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import { RootState } from "../../store";
import { signOut } from "../../store/user";
import { User } from "../../types";
import userProfile from '../../assets/userProfile.png'
import heart from '../../assets/heart.png'
import searchHeartBlack from '../../assets/searchHeartBlack.png'
import sign_Out from '../../assets/signOut.png'
import handHeart from '../../assets/handHeart.png'
import { listarId, listarTodos } from "../../service/pet";
import baseAPI from "../../service/baseAPI";
import { Pets } from "../../types";

const Admin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const takeUser = useSelector((state: RootState)=> state.persistedReducer.user) as User;
  const token = useSelector((state: RootState)=> state.persistedReducer.accessToken) 
  const optionExit = () =>{
    dispatch(signOut())
    navigate('/')    
  }

  const [takePets, setTakePets] = useState([] as Pets[])

  useEffect(()=>{
    const petsId = async () => {
      //@ts-ignore
      baseAPI.defaults.headers["Authorization"] = `Bearer ${token}`
      try {
        let response = await listarId(takeUser.user_id) as Pets[]
        setTakePets(response)              
        return response
      } catch (error) {
        //@ts-ignore
        setTakePets(['none'])
        return takePets
      }

    }

    petsId()
  },[])

  return (
    <Fragment>
      <Header logo="center" background = 'white' display = {true}>
        <BackArrow onclick={()=>{}} display = {'center'} url = '/userprofile'/>
        <Logo margin = {'center'}/>
        <OptionMenu  user_name={takeUser.name_user}>
          <LinkOptionMenu display = {true} rota='/userprofile' icon= {userProfile} >
            Editar perfil
          </LinkOptionMenu>
          <LinkOptionMenu display = {true}  rota='/admin' icon= {handHeart} >
            Meus pets
          </LinkOptionMenu>
          <LinkOptionMenu display = {true}  rota='/' icon= {heart} >
            Interessados
          </LinkOptionMenu>
          <LinkOptionMenu display = {true}  rota='/' icon= {searchHeartBlack} >
            Buscar amigo
          </LinkOptionMenu>
          <LinkOptionMenu onclick={optionExit} display = {true}  rota='/' icon= {sign_Out} >
            Sair da conta
          </LinkOptionMenu>
        </OptionMenu>

      </Header>
      <Container style={{padding: '4% 2%'}}>

        {takePets.map((item,index)=>(
          //@ts-ignore
          item != 'none' ?

          <CardAdmin
            key={index}
            name_pet= {item.name_pet} 
            description_pet= {item.comments}
            imagem = {item.image_pet01} 
          />
          :
          <div>
            'Nenhum pet encontrado'
          </div>
          
        ))}
      </Container>
    </Fragment>

  )
}

export default Admin;