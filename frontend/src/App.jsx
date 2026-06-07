import Parent from './components/Parent'
import Counter from './components/Counter'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Navbar from './components/Navbar'

const app= ()=>{
  return (

    <>
    <Navbar/>
    <h1>Hello world!!</h1>
    <h1>Hello world!!</h1>
    <Parent/>
    <Home/>
    <About/>
    <Contact/>
    <Service/>
    <Counter/>

    </>
  )
}
export default app