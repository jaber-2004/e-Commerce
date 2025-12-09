
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'

function App() {

  return (
  <Routes>
    <Route path='/' element={<RootLayouts/>}>
    <Route index element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    </Route>
  </Routes>
  )
}

export default App
