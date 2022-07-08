import { Provider } from "react-redux"
import { persistor, store } from "./store"
// @ts-ignore
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from "redux-persist/integration/react"

function App() {

  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} loading = {null}/>
      <ToastContainer autoClose={3000}/>
      <Routes/>
    </Provider>

  )
}

export default App
