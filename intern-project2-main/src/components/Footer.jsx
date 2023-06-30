import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col max-lg:m-1 max-lg:space-y-1 '>

      <div className='lg:bg-[#7ead5e] bg-[green] lg:px-[12px] px-[8px] lg:py-[16px] py-[10px]  max-lg:rounded-[10px]'>
        <ul className='flex flex-row md:justify-center lg:text-xl md:text-lg  flex-wrap text-white '>
          <NavLink to='/'>
            <li className='cursor-pointer hover:text-gray-200 border-r border-white px-[6px] md:px-[20px] lg:px-[40px]'>Home </li>
          </NavLink>
          <NavLink to='disclamer'>
            <li className='cursor-pointer hover:text-gray-200 border-r border-white px-[6px] md:px-[20px] lg:px-[40px]'>Disclaimer </li>
          </NavLink>
          <NavLink to='privacypolicy'>
            <li className='cursor-pointer hover:text-gray-200 border-r border-white px-[6px] md:px-[20px] lg:px-[40px]'>Privacy Policy </li>
          </NavLink>
          <li className='cursor-pointer hover:text-gray-200   px-[6px] md:px-[20px] lg:px-[40px]'>Contact Us  </li>
        </ul>
      </div>

      <div id='coppyright' className='text-center bg-[#cccfcb] py-6 px-1'>
        <p className='font-semibold lg:text-xl md:text-[16px] text-[14px]'>
          Copyright ©. All Rights Reserved by Kalanamak Scented Paddy Production & Conservation Society
        </p>
        <p className='pt-1 text-slate-600 text-sm'>
          This site is best viewed in 100% resolution and updated version of chrome, mozilla firefox
        </p>
      </div>

    </div>
  )
}

export default Footer