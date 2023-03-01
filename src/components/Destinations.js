import React from 'react';
import borabora from "../assests/borabora.jpg";
import borabora2 from "../assests/borabora2.jpg";
import maldives from "../assests/maldives.jpg";
import maldives2 from "../assests/maldives2.jpg";
import maldives3 from "../assests/maldives3.jpg";
import keywest from "../assests/keywest.jpg";

const Destinations = () => {
  return (
    <div className='max-[1240px] text-center mx-auto py-16 px-4'>
        <h1>All-inclusive Resorts</h1>
        <p className='py-4'> On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt="/"/>
          <img className='w-full h-full object-cover' src={borabora2} alt="/"/>
          <img className='w-full h-full object-cover' src={maldives} alt="/"/>
          <img className='w-full h-full object-cover' src={maldives2} alt="/"/>
          <img className='w-full h-full object-cover' src={keywest} alt="/"/>
        </div>
    </div>
  )
}

export default Destinations
