import { Fragment } from "react";
import BackArrow from "../../BackArrow";
import Header from "../../Header";
import Logo from "../../Logo";
import OptionMenu from "../../OptionMenu";

const Admin = () => {

  return (
    <Fragment>
      <Header logo="center">
        <BackArrow display = {'center'}/>
        <Logo margin = {'center'}/>
        <OptionMenu displayProfile="flex"/>
      </Header>
    </Fragment>

  )
}

export default Admin;