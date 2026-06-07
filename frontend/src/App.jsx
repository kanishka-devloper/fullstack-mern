import Parent from './components/Parent'
import Counter from './components/Counter'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Effects from './components/Effects'


const app= ()=>{
  return (

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/parent' element={<Parent/>}/>
      <Route path='/useState' element={<Counter/>}/>
      <Route path='/useEffects' element={<Effects/>}/>
    </Routes>

    </>
  )
}
export default app