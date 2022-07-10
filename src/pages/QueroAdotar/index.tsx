import Header from "../../components/Header";
import LinkOptionMenu from "../../components/LinkOptionMenu";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import QueroAdotar from "../../components/QueroAdotar";

import searchHeartBlack from "../../assets/searchHeartBlack.png";
import handHeart from "../../assets/handHeart.png";
import { QueroAdotarValues } from "../../types";

interface PagQueroAdotarProps {
  setInputValues: React.Dispatch<React.SetStateAction<QueroAdotarValues>>
}

function PagQueroAdotar({ setInputValues }: PagQueroAdotarProps) {
  return (
    <>
      <Header display={true} logo="none" background="white">
        <Logo margin={"none"} />
        <OptionMenu user_name="usuario">
          <LinkOptionMenu rota="/" icon={searchHeartBlack}>
            Buscar um amigo
          </LinkOptionMenu>
          <LinkOptionMenu rota="/" icon={handHeart}>
            Doar um amigo
          </LinkOptionMenu>
        </OptionMenu>
      </Header>
      <QueroAdotar setInputValues={setInputValues} />
    </>
  );
}

export default PagQueroAdotar;
