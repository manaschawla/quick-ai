
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">

      <img
        src={assets.logo}
        alt="logo"
        className="w-32 h-10 sm:w-44 object-contain cursor-pointer"
        onClick={() => navigate('/')}
      />

      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={() => openSignIn()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
        >
          Get Started
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </button>
      )}

    </div>
  )
}

export default Navbar