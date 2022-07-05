import { Fragment } from "react";
import BodyMenu from "../../components/BodyMenu";
import CarouselHome from "../../components/CarouselHome";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";


const Home = () => {

  return (
    <Fragment>
      <Header display = {true} logo="none" background="white">
        <Logo margin = {'none'}/>
        <OptionMenu displayProfile="flex"/>
      </Header>
      <CarouselHome/>
      <BodyMenu/>
      <Footer/>
    </Fragment>

  )
}

export default Home;