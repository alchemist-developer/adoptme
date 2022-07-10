import { Fragment } from "react";
import BackArrow from "../../components/BackArrow";
import CardAdmin from "../../components/CardAdmin";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";

const Admin = () => {

  return (
    <Fragment>
      <Header logo="center" background = 'white' display = {true}>
        <BackArrow onclick={()=>{}} display = {'center'} url = '/userprofile'/>
        <Logo margin = {'center'}/>

      </Header>
      <CardAdmin/>
    </Fragment>

  )
}

export default Admin;