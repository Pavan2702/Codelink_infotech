import { Provider } from 'react-redux'
import './App.css'
import Form from './Formik/ui/pages/Form'
import { store } from './Formik/Redux/app/store'
import AddUser from './Formik/ui/components/AddUser'

function App() {

  return (
    <>
      <Provider store={store}>
        <Form />
      </Provider>
      {/* <AddUser/> */}
    </>
  )
}

export default App
