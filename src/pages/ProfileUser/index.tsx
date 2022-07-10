import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BackArrow from "../../components/BackArrow";
import EditProfile from "../../components/EditProfile";
import Header from "../../components/Header";
import LinkOptionMenu from "../../components/LinkOptionMenu";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import { RootState } from "../../store";
import { User } from "../../types";
import userProfile from "../../assets/userProfile.png";
import heart from "../../assets/heart.png";
import searchHeartBlack from "../../assets/searchHeartBlack.png";
import sign_Out from "../../assets/signOut.png";
import handHeart from "../../assets/handHeart.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../store/user";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const takeUser = useSelector(
    (state: RootState) => state.persistedReducer.user
  ) as User;
  const optionExit = () => {
    dispatch(signOut());
    navigate("/");
  };

  
  return (
    <>
      <Header
        display={true}
        logo="center"
        background="rgba(255, 255, 255, 0.75)"
      >
        <BackArrow display={"center"} url="/" onclick={() => {}} />

        <Logo margin={"center"} />

        <OptionMenu user_name={takeUser.name_user}>
          <LinkOptionMenu display={true} rota="/userprofile" icon={userProfile}>
            Editar perfil
          </LinkOptionMenu>
          <LinkOptionMenu display={true} rota="/" icon={handHeart}>
            Meus pets
          </LinkOptionMenu>
          <LinkOptionMenu display={true} rota="/" icon={heart}>
            Interessados
          </LinkOptionMenu>
          <LinkOptionMenu display={true} rota="/" icon={searchHeartBlack}>
            Buscar amigo
          </LinkOptionMenu>
          <LinkOptionMenu onclick={optionExit} display = {true}  rota='/' icon= {sign_Out} >
            Sair da conta
          </LinkOptionMenu>
        </OptionMenu>
      </Header>
      <EditProfile />
    </>
  );
};

export default ProfileUser;
