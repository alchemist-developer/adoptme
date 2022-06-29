import { Fragment } from "react";
import BodyMenu from "../../BodyMenu";
import CarouselHome from "../../CarouselHome";
import Footer from "../../Footer";
import Header from "../../Header";

const Home = () => {
  return (
    <Fragment>
      <Header logo = 'none'/>
      <CarouselHome/>
      <BodyMenu/>
      <Footer/>
    </Fragment>

  )
}

export default Home;