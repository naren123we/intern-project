import React from 'react'
import Card from '../components/Card'
import CarouselPage from '../components/Carousel'



const Home = () => {
  return (
    <div>
      <CarouselPage />

      <div>
        {/* about */}


        <div className='my-2 md:my-8 lg:my-9  lg:px-16 md:px-12 px-3'>
                <h1 className='font-semibold lg:text-3xl text-2xl lg:py-2 text-[#0f5f17] text-center'>Proof of Origin</h1>
        <p className='py-3 md:text-lg md:text-center text-left'>Kalanamak Rice is in cultivation since the Buddhist period (600 BC). The grains were 
found from excavation of Aligarhwa (district Siddharthnagar, Uttar Pradesh, India),
located at Nepal border. Aligarhwa has been identified as the real kapilvastu, the 
Kingdom of king Shuddodhan, father of Lord Buddha. Shudedodhan, as the name 
suggests, means pure rice. Aligarhwa in the foothills of the Himalayas is considered the 
paddy bowl. During excavation carbonized rice grains resembling Kalanamak Rice were 
recovered from one of the rooms, which was supposed to be the kitchen store. </p>
</div>

        


         <div className='mop  py-4' id='production'>
        <h1 className='font-bold text-center md:text-3xl  text-2xl py-3 text-white'>Method Of Production</h1>
        <div className='flex lg:flex-row flex-col justify-center items-center lg:space-x-8 max-lg:space-y-5 py-10'>
        <Card data='Seed Germination Test' val='1' />
        <Card data='Preparation Of Nursery' val='2' />
        <Card data='Pest And Disease'  val='3'/>
        </div>
        
            
          </div>
      <div className='lg:px-32 md:px-12 sm:px-5 px-3 ' >


<div className='my-2 md:my-4'>
<h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17]'>Inspection Body </h2>
<p className='pt-1 '>The inspection body consisting of the following members has been constituted. </p>

  <li className='pt-1'> Department of Plant Breeding and / or Genetics, Indian Agriculture 
 Research Institute, New Delhi. </li>
<li className='pt-1'> Shoharatgarh Environmental Society Shoratgarh, Siddharth Nagar.</li> 
<li className='pt-1'> Narendra Dev Agriculture University, Kumarganj, Faizabad. </li>
<li className='pt-1'> Deputy Director of Agriculture, Siddharth Nagar. </li>
<li className='pt-1'>Gram Pradhan, Niyao, Shoratgarh, Siddharth Nagar. </li> 
<li className='pt-1'> Kalanamak Cented Paddy Production And Conservation Society Siddharth 
 Nagar. </li>
 <li className='pt-1'> Krishi Vigyan Kendra, Sohana, Siddharth Nagar </li>
       </div>  
           
</div>
      </div>
    
    </div>
  )
}

export default Home
