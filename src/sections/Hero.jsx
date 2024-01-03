import React from 'react'
import { entryimage } from '../assets/images'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
<section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 md:pr-4">
  <h1 className='text-[70px] font-montserrat'>A single Donation <span className='text-coral-red'>Can Change</span> Hundreds of Lives</h1> <Link to = '/signup'><button className='bg-coral-red'>Login Now</button></Link>
</div>
<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40'>
  <img src={entryimage} alt="boy" height={800} width={600} className='cover w-full h-24/25'/>

</div>
</section>
  )
}

export default Hero
