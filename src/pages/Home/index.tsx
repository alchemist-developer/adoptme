import { Fragment } from "react";
import BodyMenu from "../../components/BodyMenu";
import CarouselHome from "../../components/CarouselHome";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LinkOptionMenu from "../../components/LinkOptionMenu";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import searchHeartBlack from '../../assets/searchHeartBlack.png'
import handHeart from '../../assets/handHeart.png'


const Home = () => {

  return (
    <Fragment>
      <Header display = {true} logo="none" background="white">
        <Logo margin = {'none'}/>
        <OptionMenu  user_name="usuario">
          <LinkOptionMenu rota="/" icon= {searchHeartBlack} >
            Buscar um amigo
          </LinkOptionMenu>
          <LinkOptionMenu rota="/" icon= {handHeart} >
            Doar um amigo
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