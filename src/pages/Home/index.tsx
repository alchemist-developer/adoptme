import React from 'react'
import { Fragment, useEffect, useState } from "react";
import BodyMenu from "../../components/BodyHome";
import CarouselHome from "../../components/CarouselHome";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LinkOptionMenu from "../../components/LinkOptionMenu";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import userProfile from '../../assets/userProfile.png'
import heart from '../../assets/heart.png'
import searchHeartBlack from '../../assets/searchHeartBlack.png'
import sign_Out from '../../assets/signOut.png'
import handHeart from '../../assets/handHeart.png'
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../store/user";
import { User } from "../../types";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let takeUser = useSelector((state: RootState)=> state.persistedReducer.user) as User
  const [changeRota, setChangeRota] = useState(false)
  const [infoUser, setInfoUser] = useState('login')

  const optionExit = () =>{
    dispatch(signOut())
    setChangeRota(false)
    setInfoUser('login')
    navigate('/')
    
  }

  useEffect(() =>{
    const takeInfoUser = () =>{
      if (Object.keys(takeUser).length > 0) {
        setInfoUser(takeUser.name_user)
        setChangeRota(true)
      }
    }
    takeInfoUser()
  },[])

  return (
    <Fragment>
      <Header display = {true} logo="none" background="white">
        <Logo margin = {'none'}/>
        <OptionMenu  user_name= {infoUser}>
          <LinkOptionMenu display = {!changeRota} rota="/queroadotar" icon= {searchHeartBlack} >
            Buscar um amigo
          </LinkOptionMenu>
          <LinkOptionMenu display = {!changeRota} rota="/login" icon= {handHeart} >
            Doar um amigo
          </LinkOptionMenu>
          <LinkOptionMenu display = {changeRota} rota='/userprofile' icon= {userProfile} >
            Editar perfil
          </LinkOptionMenu>
          <LinkOptionMenu display = {changeRota}  rota='/admin' icon= {handHeart} >
            Meus pets
          </LinkOptionMenu>
          <LinkOptionMenu display = {changeRota}  rota='/' icon= {heart} >
            Interessados
          </LinkOptionMenu>
          <LinkOptionMenu display = {changeRota}  rota='/' icon= {searchHeartBlack} >
            Buscar amigo
          </LinkOptionMenu>
          <LinkOptionMenu onclick={optionExit} display = {changeRota}  rota='/' icon= {sign_Out} >
            Sair da conta
          </LinkOptionMenu>
        </OptionMenu>
      </Header>
      
      <CarouselHome/>
      <BodyMenu/>
      <Footer/>
    </Fragment>

  )
}

export default Home;