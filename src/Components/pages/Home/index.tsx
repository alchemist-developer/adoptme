import { Fragment } from "react";
import { useDispatch } from "react-redux";
import BodyMenu from "../../BodyMenu";
import CarouselHome from "../../CarouselHome";
import Footer from "../../Footer";
import Header from "../../Header";
import { setDisplay, setLogo } from "../../store/Components";

const Home = () => {

  const dispatch = useDispatch()
  dispatch(setDisplay('flex'))
  dispatch(setLogo('none'))

  return (
    <Fragment>
      <Header/>
      <CarouselHome/>
      <BodyMenu/>
      <Footer/>
    </Fragment>

  )
}

export default Home;