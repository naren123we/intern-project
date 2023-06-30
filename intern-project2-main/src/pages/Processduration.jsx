import React from 'react'
import img6 from '../images/img6.jpg'

const Processduration = () => {
     return (
          <div className='lg:px-28 md:px-12 sm:px-5 px-3  lg:py-8 py-4'>

               <h1 className=' font-semibold sm:text-3xl text-[22px]  inline-block pr-2 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                    Cultivation of kalanamak Rice
               </h1>
               <p className=' pt-1 md:text-lg'>
                    Kalanamak rice is grown in the Terai region of Siddharth Nagar and ten neighboring districts of eastern Uttar Pradesh.
                    It is a fragrant rice variety which is generally given better price to the farmers than other varieties of rice.
               </p>

               <div className='flex lg:flex-row flex-col-reverse items-center lg:space-x-10 my-2 md:my-4 '>
                    <img src={img6} className='lg:w-[45%] w-[97%]  pt-2 lg:pt-0 ' />
                    <div>

                         <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] capitalize'>
                              How is black paddy cultivated?
                         </h2>
                         <p className=' pt-1 md:text-lg'>
                              Cultivation of black paddy is also done almost like the cultivation of normal paddy. Black paddy is cultivated in the same fields as
                              normal paddy is cultivated. Its cultivation is possible only where there is not much water. Because it requires less water as compared
                              to hybrid paddy.The height of its plants ranges from about 4 and a half feet to 5 feet and only potash can be used as a fertilizer.
                         </p>

                         <div className='my-4 md:my-0'>
                              <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17]'>
                                   In How Many Days Black Paddy (Black Salt Paddy) Is Ready?
                              </h2>
                              <p className=' pt-1 md:text-lg'>
                                   Nine types of old indigenous varieties like Kala Namak, JawaPhool, TilakChandan, MalliPhool are suitable for cultivation.
                                   The productivity of black salt is low but the quality is good. Normally paddy crop is ready in 115 to 120 days but black salt is ready in 140 days.
                              </p>
                         </div>
                    </div>
               </div>

               <div className='my-4 md:my-0'>
                    <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17]'>
                         Black Rice Sowing Method
                    </h2>
                    <p className=' pt-1 md:text-lg'>
                         Agricultural scientist Dr. RC Chowdhary says that sowing of black paddy crop should be done around June 15.
                         After this transplant after 20 to 25 days. The species of black paddy is photosensitive, due to which 12 hours
                         of light days are required for the crop to come into ear. If sowing of black salt crop is done earlier, then the
                         leaves and earrings come out at the scheduled time. Due to which the expenditure of the farmers increases, and
                         there is no special benefit. If the nursery and transplanting of the crop is done on time, then the quality of
                         black rice is good with good aroma. Seeds are planted a year before. Companies provide seeds on the demand letter
                         sent a year ago to the Agriculture Department and other institutions.
                    </p>
               </div>

          </div>
     )
}

export default Processduration
