import { Fragment, useEffect } from "react";
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
import { listarId } from "../../service/pet";
import baseAPI from "../../service/baseAPI";

const Admin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const takeUser = useSelector((state: RootState)=> state.persistedReducer.user) as User;
  const token = useSelector((state: RootState)=> state.persistedReducer.accessToken) 
  const optionExit = () =>{
    dispatch(signOut())
    navigate('/')    
  }

  useEffect(()=>{
    const petsId = async () => {
      //@ts-ignore
      baseAPI.defaults.headers["Authorization"] = `Bearer ${token}`
      let response = await listarId(22)
      return response
    }

    petsId()
  },[])

  return (
    <Fragment>
      <Header logo="center" background = 'white' display = {true}>
        <BackArrow onclick={()=>{}} display = {'center'} url = '/userprofile'/>
        <Logo margin = {'center'}/>
        <OptionMenu  user_name="a definir">
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
          <LinkOptionMenu onclick={()=>{optionExit()}} display = {true}  rota='/' icon= {sign_Out} >
            Sair da conta
          </LinkOptionMenu>
        </OptionMenu>

      </Header>
      <Container>
        <CardAdmin  name_pet="Orion" description_pet="um gato legal!" />
      </Container>
    </Fragment>

  )
}

export default Admin;