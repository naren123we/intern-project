import logo from '../images/APEDA-Logo.png'
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
import NewGiapllication from'../dacuments/NewGiapplication.pdf'
import Giapplication205 from'../dacuments/Giapplication-205.pdf'

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [show, setshow] = useState(false)
  const [show2, setshow2] = useState(false)
  const [show3, setshow3] = useState(false)
  const [show4, setshow4] = useState(false)
  const [show5, setshow5] = useState(false)
  const [searchval ,setsearch]=useState('')
  return (
    <div>
      <div className='py-2 px-4 flex lg:flex-row flex-col justify-between'>
        <div className='lg:justify-between sm:justify-start flex sm:flex-row flex-col  items-center space-x-12'>
          <img src={logo} className='lg:w-[350px] w-[500px]' />
          <img src={G_logo} className='lg:w-[90px]    sm:w-[75px] md w-[150px]  ' />
        </div>
        <div className='flex sm:flex-row relative flex-col-reverse  max-sm:my-1 justify-between xl:space-x-10 space-x-2 sm:items-center'>

          <ul className='flex flex-row font-semibold flex-wrap items-center space-x-1 xl:mr-[40px] max-sm:my-2 max-sm:ml-2 text-lg max-sm:text-xl'>
            <li className='text-[#185f06]   hover:underline cursor-pointer'>हिंदी में</li>
            <li className='text-[#185f06]  cursor-pointer'>|</li>
            <li className='text-[#185f06]  cursor-pointer hover:underline'>RTI</li>
            <li className='text-[#185f06]  cursor-pointer'>|</li>
            <li><FaFacebook className='text-[#3B5998] hover:underline cursor-pointer' /></li>
            <li><BsTwitter className='text-[#55ACEE] hover:underline cursor-pointer' /></li>
            <li><BsLinkedin className='text-[#007bb5] hover:underline cursor-pointer' /></li>
            <li><BsYoutube className='text-[red] hover:underline cursor-pointer' /></li>
            <li><AiOutlineInstagram className='text-[#b5009f] hover:underline cursor-pointer' /></li>
          </ul>
          <div className='flex flex-row relative items-center space-x-1 max-md:mt-2'>
            <RxCross2 className={`absolute cursor-pointer right-[84px] transition-all ${searchval!==''?'block':'hidden'}`} onClick={()=>{setsearch('')}}/>
            <input className='py-[8px] px-2  max-sm:w-[300px] border-green-600 rounded-[20px] border-2' value={searchval}  onChange={(e)=>{setsearch(e.target.value)}}/>
            <button className='bg-[#168816] xl:px-7 sm:px-5 px-6  py-3 rounded-[22px] border-white border-2 shadow-lg'><BsSearch className='text-[white]' /></button>
          </div>
        </div>
      </div>

      <div className='hidden lg:flex flex-row p-3 bg-[#7ead5e]  text-lg justify-around  items-center  flex-wrap space-x-4 text-white  font-semibold'>
       <NavLink to='/'> <p> <AiOutlineHome className='text-yellow-300 text-2xl' /></p></NavLink>
       
        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>About<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <a href="#">About Black Rice</a>
            <a href="#">Black Salt Rice Festival</a>
           
        
          </div>
        </div>


        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Production<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <a href="#">Year Wise Increase</a>
            <a href="#">Production Initiatives</a>
            <a href="#">Average Production</a>
        
          </div>
        </div>
        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Cultivation<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <a href="#">Process And Duration</a>
          
            <a href="#">Black Rice Varieties And Seed Quantity</a>
            <a href="#">Black Rice Sowing Method</a>
        
          </div>
        </div>
        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Nutritional Information<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
         
          <NavLink to='nutritionalinfo'>Properties</NavLink>
          <a href="#">Benefits of Black Rice</a>
               <a href="#">Health Benefits</a>
        
          </div>
        </div>
       
        <NavLink to='general-info'><p className='flex items-center cursor-pointer hover:text-yellow-300'>General Info</p></NavLink>

         
        <div>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'><a href={Restration} target='_blank'>Registration Process</a></p>
        </div>
        <div className='dropdown'>
          <p className='flex items-center cursor-pointer hover:text-yellow-300'>Other Applications<RiArrowDropDownLine className='text-2xl' /></p>
          <div className="dropdown-content">
            <a href={NewGiapllication} target='_blank'>New G.I Application Details</a>
            <a href="#">Lucknow Chikan Craft-GI Application No. 119</a>
            <a href="#">Bikaneri Bhujia-GI Application No. 142</a>
            <a href="#">Patan Patola-GI Application No. 232</a>
          </div>
        </div>
      </div>
      <div className='lg:hidden '>
        <p className='object-contain  px-2'
          onClick={() => setToggle((prev) => !prev)}>{toggle ? <RxCross2 className='text-3xl' /> : <FiMenu className='text-3xl' />}</p>

        <div className={`${toggle ? 'flex' : 'hidden'}  bg-[#7ead5e] my-2 w-full sidebar`}>
          <ul className='list-none flex flex-col justify-center  flex-1'>
            <li className=' cursor-pointer  p-2 border-t-[#5f7d4b] border-t hover:bg-[#008000]'> <AiOutlineHome className='text-yellow-300 text-2xl' /></li>
           
            <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={()=>{setshow2(!show2)}} ><p>About</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show2 ? 'block' : 'hidden'} w-[100vw]`}>
              <a href="#">About Black Rice</a>
            <a href="#">Black Salt Rice Festival</a>
            </div>
              </div>
              <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={()=>{setshow3(!show3)}}><p>Production</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show3 ? 'block' : 'hidden'} w-[100vw]`}>
              <a href="#">Year Wise Increase</a>
            <a href="#">Production Initiatives</a>
            <a href="#">Average Production</a>
            </div>
              </div>
              <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={()=>{setshow4(!show4)}}><p>Cultivation</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show4 ? 'block' : 'hidden'} w-[100vw]`}>
              <a href="#">Process And Duration</a>
               <a href="#">Black Rice Varieties And Seed Quantity</a>
          <a href="#">Black Rice Sowing Method</a>
            </div>
              </div>

              <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white'onClick={()=>{setshow5(!show5)}} ><p>Nutritional Information</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show5 ? 'block' : 'hidden'} w-[100vw]`}>
           <NavLink to='nutritionalinfo'>Properties</NavLink>
               <a href="#">Benefits of Black Rice</a>
               <a href="#">Health Benefits</a>
      
            </div>
              </div>

            <div className='dropdown2'>
              <li className=' cursor-pointer flex justify-between font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white' onClick={() => { setshow(!show) }}><p>Other Application</p> <RiArrowDropDownLine className='text-2xl' /></li>
              <div className={`dropdown-content2 ${show ? 'block' : 'hidden'} w-[100vw]`}>
                <a href={NewGiapllication} target='_blank'>New G.I Application Details</a>
                <a href='#'>Lucknow Chikan Craft-GI Application No. 119</a>
                <a href='#'>Bikaneri Bhujia-GI Application No. 142</a>
                <a href="#">Patan Patola-GI Application No. 232</a>
              </div>
            </div>
           
            <li className=' cursor-pointer font-serif  p-2 border-t-white border-t hover:bg-[#008000] text-white'>General Info</li>
            <li className=' cursor-pointer font-serif hover:bg-[#008000]  p-2 border-t-white border-t text-white'><a href={Restration}>Registration Process</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar
