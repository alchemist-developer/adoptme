import BackArrow from "../../components/BackArrow";
import EditProfile from "../../components/EditProfile";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import OptionMenuCadastro from "../../components/OptionMenuCadastro";

const ProfileUser = () => {
  return (
    <>
      <Header 
        display= {true} 
        logo="center" 
        background="rgba(255, 255, 255, 0.75)"
      >

        <BackArrow 
          display = {'center'} 
          url = '' 
          onclick = {()=>{}}
        />
        
        <Logo margin = {'center'}/>

        <OptionMenuCadastro user={'usuario'} />

      </Header>
      <EditProfile/>
    </>
  )
}

export default ProfileUser;