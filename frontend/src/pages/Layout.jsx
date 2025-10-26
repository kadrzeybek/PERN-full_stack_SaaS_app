import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { useUser, SignIn } from '@clerk/clerk-react';


const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        <img className='cursor-pointer w-32 sm:w-44' onClick={() => navigate('/')} src={assets.logo} alt="logo" />
        {
          sidebar ? <X className='size-6 text-gray-600 sm:hidden' onClick={() => setSidebar(false)} /> 
          : <Menu className='size-6 text-gray-600 sm:hidden' onClick={() => setSidebar(true)} /> 
        }
      </nav>
      <div className='flex flex-1 w-full h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#F4F7FB]'>
        <Outlet />
      </div>
      </div>
    
    </div>
  ) : (
    <div className='flex h-screen justify-center items-center'>
      <SignIn />
    </div>
  )
}

export default Layout
