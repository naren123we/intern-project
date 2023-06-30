import React from 'react'
import blackrice from '../images/black-rice.jpg'
const Nutritionalinfo = () => {
    return (

        <div className='lg:px-32 md:px-12 sm:px-5 px-3  lg:py-8 py-4'>

            <div className='flex lg:flex-row flex-col-reverse items-center lg:space-x-10  '>
                <img
                    src={blackrice}
                    className='lg:w-[45%] w-[100%] lg:h-[615px] sm:h-[480px] pt-2 lg:pt-0 '
                />
                <div>
                    <h1 className=' lg:text-center  max-lg:inline-block font-semibold sm:text-3xl text-2xl py-1  border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                        Properties Of Kalanamak Rice
                    </h1>
                    <p className=' pt-1 md:text-lg'>
                        Kalanamak rice has more antioxidant properties than coffee and tea, due to which it is beneficial
                        for many health related diseases. The anti-oxidant properties present in high quantity increases the body's
                        power to fight against diseases. According to experts, black rice also helps in fighting deadly diseases like
                        cancer. Iron, magnesium, vitamin E, vitamin B, calcium and zinc are present in black rice as compared to white and brown rice.
                    </p>

                    <div className='pt-2'>
                        <h2 className='font-semibold  text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                            Nutritional Information
                        </h2>
                        <table id='customers'>
                            <tr>
                                <th>Nutrients</th>
                                <th>Value</th>
                            </tr>
                            <tr>
                                <td>Energy</td>
                                <td>1500 kJ/ 357 kcal</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>9.9(g)</td>
                            </tr>
                            <tr>
                                <td>Fat </td>
                                <td>3.6(g)</td>
                            </tr>
                            <tr>
                                <td>Saturated</td>
                                <td> 0.72</td>
                            </tr>
                            <tr>
                                <td>Carbohydrates</td>
                                <td> 0.72 (g)</td>
                            </tr>
                            <tr>
                                <td>Sugars</td>
                                <td> {'<'} 0.05</td>
                            </tr>
                            <tr>
                                <td>Salt  </td>
                                <td>0.03 (g)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Nutritionalinfo
