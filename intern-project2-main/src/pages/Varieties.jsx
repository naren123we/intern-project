import React from 'react'
import img4 from '../images/img4.jpg'
const Varieties = () => {
  return (
    <div className='lg:px-28 md:px-12 sm:px-5 px-3  lg:py-8 py-4'>

    <h1 className='font-semibold sm:text-3xl text-2xl  inline-block pr-2 py-1 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
      How Much Seed Is Required For Cultivation of Black Paddy
      </h1>
     <p className=' pt-1 md:text-lg'>
      About three forts of black paddy seeds are required for cultivation on one bigha of black paddy land. 
                The farmer can buy black paddy seeds at the rate of Rs.300 per kilo either from the local market or by contacting the horticulture department of his district or government nursery or KrishiVigyan Kendra. If there is an agricultural university nearby,
                 it can be obtained from there also. If you grow black paddy organically, you get more for it.
                 </p>

       <div className='flex lg:flex-row flex-col-reverse items-center lg:space-x-10 my-2 md:my-4 '>
       <img src={img4} className='lg:w-[45%] w-[97%]  pt-2 lg:pt-0 ' />
       <div>
        <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] capitalize'>
          Learn, the advanced variety of black paddy and the right method of cultivation
          </h2>
            <p className=' pt-1 md:text-lg'>
              There is good news for diabetic patients, now they too can eat rice fearlessly. It will also prove to be a boon for the patients of diabetes and
             blood pressure.  The market price of black paddy ranges from Rs 400 to Rs 800 per kg.The dreams of the farmers will be fulfilled by the cultivation of 
             black paddy which is sold for Rs 400 to 800 per kg. Fertilizers, pesticides are not used in its cultivation, due to which the cost of its cultivation is less, there is no 
             danger of chemicals in its rice. This is the reason that even though the yield of black paddy is less than that of normal paddy, the farmers get good profit from it. Apart 
             from this, black paddy crop is not affected by diseases and insects. Black paddy is gold for farmers, 
            black paddy is the most popular variety among farmers.
            </p>
               </div>
             </div>

       <div className='my-4 md:my-0'>
                  <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] capitalize'>
                    Black Rice Varieties
                    </h2>
                 <p className=' pt-1 md:text-lg'>
                  In the last few years, the trend of farmers has increased rapidly towards new hybrid paddy seeds. Due to this farmers
                  are forgetting the old varieties of paddy crops. As a result, these varieties are gradually disappearing. In such a situation, 
                  there are some farmers who are not only cultivating  old varieties of paddy, but are also motivating other farmers to cultivate 
                  it.Black paddy is cultivated in a completely organic way. If chemical fertilizers are used in the cultivation of black paddy, 
                  then its crop becomes very long. Due to which there is a fear of falling. For this reason chemical fertilizers are not used in 
                  its cultivation. And it is completely free of fertilizers, pesticides and chemicals. Its main varieties for the cultivation of 
                  black paddy are as follows- There are varieties of paddy like Kala Namak, Kala Bhat, JawaPhool, Kala Malli, TilakChandan, but
                   with time the yield of these varieties became nominal.Because of this, the Agriculture Department is working to save these old 
                   varieties. Along with the seeds of these varieties of black paddy, the Agriculture Department is also giving sprayers to the farmers
                    for spraying organic fertilizers and medicines. At the same time, farmers also get advice from agricultural scientists.
                  </p>
            </div>

   </div>
  )
}

export default Varieties
