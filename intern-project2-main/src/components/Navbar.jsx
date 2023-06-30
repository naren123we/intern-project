import logo from '../images/logo.png'
import G_logo from '../images/g20.png'
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import Restration from '../dacuments/resistration.pdf'
import Marquee from './Marquee';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [show3, setshow3] = useState(false)
  const [show4, setshow4] = useState(false)
  const [show5, setshow5] = useState(false)
  const [searchval, setsearch] = useState('')

  function tog() {
    setTimeout(() => {
      setToggle(!toggle)
    }, 2000)
  }


  return (
    <div>
      <div className='py-2 sm:px-4 px-2 flex lg:flex-row flex-col justify-between'>

        <div className='lg:justify-between sm:justify-start flex sm:flex-row flex-col  items-center space-x-12'>
          <img
            src={logo}
            className='lg:w-[350px] w-[500px]'
          />
          <img
            src={G_logo}
            className='lg:w-[100px] max-md:hidden   sm:w-[90px] w-[150px]  '
          />
        </div>

        <div className='flex sm:flex-row relative flex-col-reverse  max-sm:mt-2 justify-between xl:space-x-10 sm:mt-[5px] lg:mt-0 sm:items-center'>
          <ul className='sm:flex hidden flex-row font-semibold flex-wrap items-center space-x-2 xl:mr-[40px] max-sm:my-2 max-sm:ml-2 text-2xl '>
            <li className='hover:scale-105'><FaFacebook className='text-[#3B5998]  hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><BsTwitter className='text-[#55ACEE] hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><BsLinkedin className='text-[#007bb5] hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><BsYoutube className='text-[red] hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><AiOutlineInstagram className='text-[#b5009f] hover:underline cursor-pointer' /></li>
          </ul>
          <div className='flex flex-row relative items-center justify-center space-x-1 '>
            <RxCross2
              className={`absolute cursor-pointer right-[84px] transition-all ${searchval !== '' ? 'block' : 'hidden'}`}
              onClick={() => { setsearch('') }}
            />
            <input
              className='py-[6px] px-2  max-sm:w-[300px] border-green-600 rounded-[20px] border-2 cursor-not-allowed'
              value={searchval}
              onChange={(e) => { setsearch(e.target.value) }}
              disabled={true}
            />
            <button
              className='bg-[#168816] xl:px-7 sm:px-5 px-6  py-3 rounded-[22px] border-white border-2 shadow-lg cursor-not-allowed'>
              <BsSearch className='text-[white]' />
            </button>
          </div>
        </div>
      </div>

      <div className='hidden lg:flex flex-row py-3 px-5 bg-[#7ead5e]  text-lg justify-around  items-center  flex-wrap space-x-4 text-white  font-semibold'>
        <NavLink to='/'>
          <p> <AiOutlineHome className='text-yellow-300 text-2xl' /></p>
        </NavLink>
        <NavLink to='aboutblacksalt'>
          <li className='flex items-center cursor-pointer hover:text-yellow-300'>About</li>
        </NavLink>

        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Production <RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <NavLink to='production'>Production of Kalanamak</NavLink>
            <NavLink to='methods'>Method of Production</NavLink>
          </div>
        </div>

        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Cultivation<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <NavLink to='process-duration'>Package and prectice of Kalanamak Rice</NavLink>
            <NavLink to='varieties'>Kalanamak Rice Varieties And Seed Quantity</NavLink>
          </div>
        </div>

        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Nutritional Information<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <NavLink to='nutritionalinfo'>Properties</NavLink>
            <NavLink to='benefits'>Benefits of Kalanamk Rice</NavLink>
          </div>
        </div>

        <NavLink to='general-info'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>General Info</p>
        </NavLink>

        <div>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>
            <a href={Restration} target='_blank'>Registration Process</a></p>
        </div>

      </div>
      <div className='lg:hidden pb-2 '>
        <div className='flex flex-row justify-between items-center  px-3'>
          <p className='object-contain '
            onClick={() => setToggle((prev) => !prev)}>{toggle ? <RxCross2 className='text-3xl' /> : <FiMenu className='text-3xl' />}</p>
          <ul className='flex sm:hidden flex-row font-semibold flex-wrap items-center space-x-2 xl:mr-[40px] max-sm:my-2 max-sm:ml-2 text-2xl '>
            <li className='hover:scale-105'><FaFacebook className='text-[#3B5998]  hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><BsTwitter className='text-[#55ACEE] hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><BsLinkedin className='text-[#007bb5] hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><BsYoutube className='text-[red] hover:underline cursor-pointer' /></li>
            <li className='hover:scale-105'><AiOutlineInstagram className='text-[#b5009f] hover:underline cursor-pointer' /></li>
          </ul>
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'}  bg-[#7ead5e] my-2 w-full sidebar transition-all`}>
          <ul className='list-none flex flex-col justify-center  flex-1'>
            <NavLink to='/'
              onClick={tog}>
              <li className=' cursor-pointer  p-2 border-t-[#5f7d4b] border-t hover:bg-[#008000]'> <AiOutlineHome className='text-yellow-300 text-2xl' /></li>
            </NavLink>
            <NavLink to='aboutblacksalt'
              onClick={tog}> <li className=' cursor-pointer  font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' >About</li>
            </NavLink>

            <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={() => { setshow3(!show3) }}><p>Production</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show3 ? 'block' : 'hidden'} w-[100vw]`}>
                <NavLink to='production' onClick={tog}>Production of Kalanamak</NavLink>
                <NavLink to='methods' onClick={tog}>Method of Production </NavLink>
              </div>
            </div>

            <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={() => { setshow4(!show4) }}><p>Cultivation</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show4 ? 'block' : 'hidden'} w-[100vw]`}>
                <NavLink to='process-duration' onClick={tog}>Package And Prectice of Kalanamak Rice</NavLink>
                <NavLink to='varieties' onClick={tog}>Kalanamak Rice Varieties And Seed Quantity</NavLink>
              </div>
            </div>

            <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={() => { setshow5(!show5) }} ><p>Nutritional Information</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show5 ? 'block' : 'hidden'} w-[100vw]`}>
                <NavLink to='nutritionalinfo' onClick={tog}>Properties</NavLink>
                <NavLink to='benefits' onClick={tog}>Benefits of Kalanamak Rice</NavLink>
              </div>
            </div>

            <NavLink to='general-info'
              onClick={tog}>
              <li className=' cursor-pointer font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white'>General Info</li>
            </NavLink>
            <li
              onClick={tog} className=' cursor-pointer font-serif hover:bg-[#008000]  p-2 border-t-white border-t text-white'>
              <a href={Restration}>Registration Process</a>
            </li>
          </ul>
        </div>
      </div>
      <Marquee />

    </div>

  )
}

export default Navbar
