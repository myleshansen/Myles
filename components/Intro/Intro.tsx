import React, { useEffect, useRef } from 'react';

const Intro = () => {
  return (
    <section className='flex flex-col gap-8'>
      <section>
        <section className='sticky -top-[40%] flex justify-start mb-14 h-fit'>
          <div className='flex min-w-full'>
            <div className='w-full p-4 flex flex-col items-center justify-center sm:bg-unset sm:flex sm:items-center sm:justify-center sm:bg-auto sm:bg-no-repeat'>
              <div className='mb-4 sm:mt-10'>
                <div><p className='font-mono font-thin text-[0.5rem] sm:text-[0.65rem] text-right'>[2024]</p></div>
                <h1 className='font-jacquard text-[20vw] sm:text-[17.5vw] leading-[0.5] tracking-[-5px] '>Software</h1>
                <h1 className='font-jacquard text-[14.5vw] sm:text-[13vw]'> - Engineer - </h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Intro;
