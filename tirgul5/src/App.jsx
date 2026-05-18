import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import logo from './assets/logo.png'
import Login from './UIComponents/Login'
import Footer from './UIComponents/footer'
import Register from './UIComponents/Register'
import Admin from './UIComponents/Admin'
import Profile from './UIComponents/Profile'



function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('home')

  const menuItems = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Services', path: 'services' },
    { label: 'Contact', path: 'contact' },
    { label: 'Login', path: 'login' },
    { label: 'Register', path: 'register' },
    { label: 'Admin', path: 'admin' },
    { label: 'Profile', path: 'profile' },
  ]

  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-400 to-emerald-400'>
      <header className="flex items-center py-6 px-8 md:px-32 bg-white text-black drop-shadow-md">
        <a href="#"><img src={logo} alt="Logo" className="w-20"></img></a>
        <ul className="flex items-center gap-12 font-semibold text-base">
          {menuItems.map((item) => (
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
              {item.label}
            </li>
          ))}

        </ul>

      </header>
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
      {page === 'admin' && <Admin />}
      {page === 'profile' && <Profile />}
      {page === 'home' && <div></div>}
      <Footer></Footer>

    </div>
  )
}

export default App



