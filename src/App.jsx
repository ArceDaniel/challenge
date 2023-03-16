import { Route, Routes } from 'react-router'
import Form from './views/Form'
import Data from './views/Data'
import './App.css'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/data' element={<Data />}/>
    </Routes>
    </>
  )
}

export default App
