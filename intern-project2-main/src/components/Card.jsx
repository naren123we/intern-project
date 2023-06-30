import React from 'react'
import { MdPestControl } from 'react-icons/md'
import { GiPlantsAndAnimals } from 'react-icons/gi'
import { RiSeedlingFill } from 'react-icons/ri'

const Card = ({ data, val }) => {
  return (
    <div
      className={` bg-[#eeeeee] shadow-sm w-[300px] h-[220px] flex  flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all `}>
      {val == '3' ? <MdPestControl className='text-5xl text-[#296d29]' /> :
        val == '2' ? <GiPlantsAndAnimals className='text-5xl text-[#296d29]' /> :
          < RiSeedlingFill className='text-5xl text-[#296d29]' />
      }
      <h1 className={` font-semibold text-xl text-black`}>
        {data}
      </h1>
    </div>
  )
}

export default Card
