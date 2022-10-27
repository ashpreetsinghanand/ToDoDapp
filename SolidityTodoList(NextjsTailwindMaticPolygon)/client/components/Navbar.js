import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='w-[full] flex px-2 py-8 justify-between'>
      
     <div className='flex-3 text-5xl'> ⌛</div>
      <div className='flex-1 flex place-content-center  capitalize gap-[30px] text-5xl font-bold  font-mono' >TODO LIST DAPP
      
       
      </div>
      <div className='flex-3 flex text-5xl bolder'>📝</div>
      
    </div>
  )
}

export default Navbar
