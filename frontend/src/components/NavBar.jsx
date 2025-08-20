import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Shell } from 'lucide-react';

const NavBar = () => {
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
            </div>
        </div>
    </header>
  )
}

export default NavBar
