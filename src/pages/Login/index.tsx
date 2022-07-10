import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../components/BackArrow';
import Container from '../../components/Container'
import Header from '../../components/Header';
import LinkOptionMenu from '../../components/LinkOptionMenu';
import FormLogin from '../../components/Login';
import Logo from '../../components/Logo';
import OptionMenu from '../../components/OptionMenu';

import searchHeartBlack from '../../assets/searchHeartBlack.png'
import handHeart from '../../assets/handHeart.png'

const Login = () => {
  
  const [changePage, setChangePage] = useState(true)
  const navigate = useNavigate()

  const back = () => {
    if(changePage){
      return navigate('/')
    }
    return setChangePage(true)
  }
  

  return (
    <Container>
      <>
        <Header 
          display= {true} 
          logo="center" 
          background="rgba(255, 255, 255, 0.75)"
        >

          <BackArrow 
            display = {changePage ?'none' : 'center'} 
            url = '' 
            onclick = {()=>back()}
          />
          
          <Logo margin = {changePage ?'none' : 'center'}/>

          <OptionMenu user_name='login' >
          <LinkOptionMenu display = {true} rota="/queroadotar" icon= {searchHeartBlack} >
              Buscar um amigo
            </LinkOptionMenu>
            <LinkOptionMenu display = {true} rota="/login" icon= {handHeart} >
              Doar um amigo
            </LinkOptionMenu>
          </OptionMenu>

        </Header>
        <FormLogin />
      </>
    </Container>

  );
}

export default Login;