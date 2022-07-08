import React from 'react';
import LinkOptionMenu from '../LinkOptionMenu';
import OptionMenu from '../OptionMenu';
import userProfile from '../../assets/userProfile.png'
import handHeart from '../../assets/handHeart.png'
import heart from '../../assets/heart.png'
import searchHeartBlack from '../../assets/searchHeartBlack.png'
import signOut from '../../assets/signOut.png'

interface Props{
    user: string;
}

const OptionMenuCadastro = (props: Props) => {
  return (
    <OptionMenu  user_name= {props.user} >

        <LinkOptionMenu rota='/' icon= {userProfile} >
        Editar perfil
        </LinkOptionMenu>
        <LinkOptionMenu rota='/' icon= {handHeart} >
        Meus pets
        </LinkOptionMenu>
        <LinkOptionMenu rota='/' icon= {heart} >
        Interessados
        </LinkOptionMenu>
        <LinkOptionMenu rota='/' icon= {searchHeartBlack} >
        Buscar amigo
        </LinkOptionMenu>
        <LinkOptionMenu rota='/' icon= {signOut} >
        Sair da conta
        </LinkOptionMenu>

    </OptionMenu>
  )
}

export default OptionMenuCadastro;