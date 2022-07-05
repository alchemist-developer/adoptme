import { Fragment } from "react";
import BodyMenu from "../../BodyMenu";
import CarouselHome from "../../CarouselHome";
import Footer from "../../Footer";
import Header from "../../Header";
import Logo from "../../Logo";
import OptionMenu from "../../OptionMenu";

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