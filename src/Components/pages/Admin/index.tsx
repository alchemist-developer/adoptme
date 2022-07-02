import { Fragment } from "react";
import BackArrow from "../../BackArrow";
import CardAdmin from "../../CardAdmin";
import Header from "../../Header";
import Logo from "../../Logo";
import OptionMenu from "../../OptionMenu";

const Admin = () => {

  return (
    <Fragment>
      <Header logo="center" background = 'white'>
        <BackArrow display = {'center'} url = '/userprofile'/>
        <Logo margin = {'center'}/>
        <OptionMenu displayProfile="flex"/>
      </Header>
      <CardAdmin/>
    </Fragment>

  )
}

export default Admin;