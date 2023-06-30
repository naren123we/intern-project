import React from 'react';


const Marquee = () => {
  return (
    <div className='flex flex-row items-center py-1 md:px-5 px-2 bg-slate-100 shadow-sm'>
      <p className='inline-block sm:w-[20%] w-[135px] lg:w-[12%] text-center md:text-xl font-semibold  '>What's new :</p>
      <marquee
        className='md:text-lg text-[#168816] md:mx-5 ms-2'
        scrollamount='5'  >
        Kalanamak rice is grown in the Terai region of Siddharth Nagar and ten neighboring districts of eastern Uttar Pradesh.
      </marquee>
    </div>
  );
};

export default Marquee;
