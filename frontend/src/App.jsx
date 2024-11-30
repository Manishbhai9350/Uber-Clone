import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import LoginCaptain from './Pages/LoginCaptain'
import Register from './Pages/Register'
import RegisterCaptain from './Pages/RegisterCaptain'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/captain-login' element={<LoginCaptain/>} />
      <Route path='/captain-register' element={<RegisterCaptain/>} />
    </Routes>
  )
}

export default App
