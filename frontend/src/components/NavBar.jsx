import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, LogOut, Settings, Shell } from 'lucide-react';

const NavBar = () => {

  const menuref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLogout = () => {
    setMenuOpen(false)
    onLogout()
  }

  return (
    <header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 font-sans'>
        <div className='flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto'>
            {/*logo box*/}
            <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer group'>
                {/*logo*/}
                <div className='relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br shadow-lg 
                from-green-500 via-teal-500 to-sky-500 group-hover:shadow-purple-300/50 group-hover:scale-105 transition-all duration-300'>
                  <Shell className='w-6 h-6 text-white'/> {/*logo icon*/}
                </div>

                {/*Brand name*/}
                <span className='text-2xl font-sans font-bold text-sky-900' >
                  ZenTask
                </span>
            </div>
            <div className='flex items-center gap-4'>
              {/*Settings button*/}
              <button onClick={() => navigate('/profile')} className='p-2 text-sky-900 hover:text-sky-600 
              transition-colors duration-300 hover:bg-purple-50 rounded-full'>
                <Settings className='w-5.5 h-5.5'/>
              </button>

              {/*User dropdown*/}
              <div ref={menuref} className='relative'>
                <button onClick={handleMenuToggle} className='flex items-center gap-2 px-3 py-3 rounded-full cursor-pointer
                hover:bg-purple-50 transition-colors duration-300 border border-transparent hover:border-sky-200'>

                  <div className='relative'>
                    {user.avatar ? (
                      <img src={user.avatar} alt='Avatar' className='w-9 h-9 rounded-full shadow-sm'/>
                    ) : (
                      <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br
                       from-green-500 to-sky-500 text-white font-semibold shadow-md'>
                        {user.name?.[0]?.toUpperCase() || 'U'}
                      </div>
                    )}
                    <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse'/>
                  </div>

                  <div className='text-left hidden md:block'>
                    <p className='text-sm font-medium text-gray-800 '>{user.name}</p>
                    <p className='text-xs font-normal text-gray-500 '>{user.email}</p>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300
                  ${menuOpen ? 'rotate-180' : ''}`}/>

                </button>

                {menuOpen && (
                  <ul className='absolute top-14 right-0 w-56 bg-white rounded-2xl shadow-xl 
                  border border-sky-100 z-50 overflow-hidden animate-fadeIn'>

                    <li className='p-2'>
                      <button onClick={() => {
                        setMenuOpen(false)
                        navigate('/profile')
                      }} className='w-full px-4 py-2.5 text-left hover:bg-sky-50 text-sm text-gray-700 transition-colors 
                      flex items-center gap-2 group' role='menuitem'>
                        <Settings className='w-4 h-4 text-gray-700'/>
                        Profile Settings
                      </button>
                    </li>

                    <li className='p-2'>
                      <button onClick={handleLogout} className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm 
                      hover:bg-red-50 text-red-600'>
                        <LogOut className='w-4 h-4'/>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar
