import { Fragment } from "react";
import BodyMenu from "../../BodyMenu";
import CarouselHome from "../../CarouselHome";
import Header from "../../Header";

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <CarouselHome/>
      <BodyMenu/>
    </Fragment>

  )
}

export default Home;