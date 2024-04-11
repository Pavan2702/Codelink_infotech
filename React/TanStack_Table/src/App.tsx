import { Provider } from 'react-redux'
import './App.css'
import TskTable from './Table_display/ui/components/TskTable'
import { store } from './Table_display/Redux/app/Store'

function App() {

  return (
    <>
    <Provider store={store}>
      <TskTable/>
    </Provider>
    </>
  )
}

export default App
