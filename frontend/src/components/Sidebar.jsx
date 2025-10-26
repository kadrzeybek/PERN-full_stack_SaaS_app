import { useClerk, useUser, Protect} from '@clerk/clerk-react';
import { Eraser, Hash, House, SquarePen, Image, Scissors, FileText, Users, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
    {to: '/ai', label: 'Dashboard', Icon: House},
    {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
    {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
    {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
    {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText},
    {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
    {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors},
    {to: '/ai/community', label: 'Community', Icon: Users},
]

const Sidebar = ({sidebar, setSidebar}) => {
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk()

  return (
    <div className={`flex flex-col justify-between items-center max-sm:absolute top-14 w-60 bg-white border-r border-gray-200 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
      <div className='w-full my-7'>
        <img src={user.imageUrl} alt="userImg" className='w-13 rounded-full mx-auto' />
        <h1 className='text-center mt-1'>{user.fullName}</h1>
        <div className='px-6 mt-5 text-sm text-gray-600 font-medium'>
            {navItems.map(({to, label, Icon}) => (
                <NavLink key={to} to={to} end={to === '/ai'} onClick={() => setSidebar(false)} className={({isActive}) => `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#d0d628] to-[#53d627] text-white' : ''}`}>
                    {({isActive}) =>(
                        <>
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                        {label}
                        </>

                    )}
                </NavLink>
            ))}
        </div>
      </div>
      <div className='flex justify-between items-center w-full border-t border-gray-200 py-4 px-7'>
            <div className='flex gap-2 items-center cursor-pointer' onClick={openUserProfile}>
                <img src={user.imageUrl} className='rounded-full w-8' alt="userImg" />
                <div>
                    <h1 className='text-sm font-medium'>{user.fullName}</h1>
                    <p className='text-xs text-gray-500'>
                        <Protect plan='premium_user' fallback="Free">Premium</Protect> Plan
                    </p>
                </div>
            </div>
            <LogOut className='text-gray-400 w-4.5 hover:text-gray-700 transition cursor-pointer' onClick={signOut} />
      </div>
    </div>
  )
}

export default Sidebar
