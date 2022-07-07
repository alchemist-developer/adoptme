import { Provider } from "react-redux"
import { store } from "./store"
// @ts-ignore
import Routes from './routes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <Provider store={store} >
      <ToastContainer autoClose={3000}/>
      <Routes/>
    </Provider>

  )
}

export default App
