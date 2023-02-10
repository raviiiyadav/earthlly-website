import Image from 'next/image';
import React from 'react';

const ShopMore = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Shop More</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default ShopMore;
