import React from 'react'
import { entryimg, support1, support2, support3 } from '../assets/images'


const Achievements = () => {
  return (
<section>
    <div className="container">
        <h1 className='text-4xl font-montserrat text-center'>Your<span className='text-coral-red'> help</span> has helped us Achieve </h1> 
        <div className="flex flex-wrap mt-20 items-center justify-between">
            <div className='px-3 py-4 h-[400px] lg:w-[400px] md:w-[300px] shadow-xl rounded-lg flex flex-col justify-center items-center'>
               <img src={support1} height={200} width={220} alt="" />
               <h1 className='text-3xl font-montserrat mt-6'>1,000 + Orphanages</h1>
               <p className='mt-4 text-md text-center font-palanquin'>We are now connected to 1000+ orphanages who are getting supported by you every moment. </p>

            </div>
            <div className='px-3 py-4 h-[400px] lg:w-[400px] md:w-[300px] shadow-xl rounded-lg flex flex-col justify-center items-center'>
               <img src={support2} height={200} width={280} alt="" />
               <h1 className='text-3xl font-montserrat mt-6'>100+ Schools</h1>
               <p className='mt-4 text-md text-center font-palanquin'>We have built 100+ schools around the country providing education to 50000+ kids all around India </p>

            </div>
            <div className='px-3 py-4 h-[400px] lg:w-[400px] md:w-[300px] shadow-xl rounded-lg flex flex-col justify-center items-center'>
               <img src={support3} height={100} width={250} />
               <h1 className='text-3xl font-montserrat mt-6'>500+ Shelters</h1>
               <p className='mt-4 text-md text-center font-palanquin'>500+ shelters have been made by us giving a home to 2000+ people. </p>
            </div>




        </div>
        </div>
        
</section>
  )
}

export default Achievements
