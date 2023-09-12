import React from 'react';


//import data
import {hero} from '../data';

//import components
import Stats from '../components/Stats';

const Hero = () => {
//destructure hero
const { title, subtitle, buttonText } = hero;
  return(
   <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>

    <div className='container mx-auto text-center'>

      {/*title*/}
      <h1 className='text-2x1 mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>

      {/*subtitle*/}
      <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-x1'>{subtitle}</h2>

      {/*cta button*/}
      <button className='bg-[rgb(85,220,232)] hover:bg-[rgb(242,255,99)] px-[35px] py-[9px] mb-[160px] text-x1 text-cyan-800 rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>{buttonText}</button>

       {/*stats*/}
       <div className=''>
        <Stats />
       </div>

    </div>
    </section>
  );
};

export default Hero;
