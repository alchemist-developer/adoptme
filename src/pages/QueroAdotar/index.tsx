import Header from "../../components/Header";
import LinkOptionMenu from "../../components/LinkOptionMenu";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import QueroAdotar from "../../components/QueroAdotar";

import searchHeartBlack from "../../assets/searchHeartBlack.png";
import handHeart from "../../assets/handHeart.png";
import { QueroAdotarValues, User } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface PagQueroAdotarProps {
  setInputValues: React.Dispatch<React.SetStateAction<QueroAdotarValues>>
}

function PagQueroAdotar({ setInputValues }: PagQueroAdotarProps) {

  let user = useSelector((state: RootState)=> state.persistedReducer.user) as User

  return (
    <>
      <Header display={true} logo="none" background="white">
        <Logo margin={"none"} />
        <OptionMenu user_name= {user.name_user ? user.name_user : 'login'}>
          <LinkOptionMenu display = {true} rota="/" icon={searchHeartBlack}>
            Buscar um amigo
          </LinkOptionMenu>
          <LinkOptionMenu display = {true} rota="/" icon={handHeart}>
            Doar um amigo
          </LinkOptionMenu>
        </OptionMenu>
      </Header>
      <QueroAdotar setInputValues={setInputValues} />
    </>
  );
}

export default PagQueroAdotar;
