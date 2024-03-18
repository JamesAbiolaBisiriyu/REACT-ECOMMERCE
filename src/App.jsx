
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavItems from './components/NavItems'
import AuthProvider from './context/AuthProvider'

function App() {

  return (
    <>
    <NavItems/>
    <div className='min-vh-100'>
    <Outlet/>
    </div>
    <Footer/>

    </>
  )
}

export default App
