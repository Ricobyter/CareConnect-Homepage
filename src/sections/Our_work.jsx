import {entryimg, adoption, fdonation, healthcare, shelter} from '../assets/images'
const Our_Work = () => {

    return (
      <div>
          <h1 className='text-4xl text-center font-montserrat'> Our <span className='text-coral-red'>
          Work</span></h1>
      <div className='flex min-h-screen items-center justify-center '>
          <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4'>
          <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                  <div className='h-96 w-72'>
                      <img src={healthcare} alt="" className='h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125 transition-transform duration-500'/>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                  <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                      <h1 className='text-3xl font-bold text-white mt-[-40px]'>HealthCare</h1>
                      <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>Primary healthcare is our main goal and hence we have worked really hard towards it and its uplifting</p>
                      <button className='rounded-full bg-coral-red py-3 px-3.5 text-sm capitalize text-white '>See More</button>
                  
                  </div>
              </div>
              <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                  <div className='h-96 w-72'>
                      <img src={shelter} alt="" className='h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125 transition-transform duration-500'/>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                  <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                      <h1 className='text-3xl font-bold text-white mt-[-40px]'>Shelter</h1>
                      <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>500+ shelters have been made by us giving a home to 2000+ people.</p>
                      <button className='rounded-full bg-coral-red py-3 px-3.5 text-sm capitalize text-white '>See More</button>
                  
                  </div>
              </div>
              <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                  <div className='h-96 w-72'>
                      <img src={fdonation} alt="" className='h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125 transition-transform duration-500'/>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                  <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                      <h1 className='text-3xl font-bold text-white mt-[-40px]'>Food Donation</h1>
                      <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>We regulalry donate food to the needy people around the country</p>
                      <button className='rounded-full bg-coral-red py-3 px-3.5 text-sm capitalize text-white  '>See More</button>
                  
                  </div>
              </div>
              <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                  <div className='h-96 w-72'>
                      <img src={adoption} alt="" className='h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125 transition-transform duration-500'/>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                  <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[67%] group-hover:translate-y-0 transition-all duration-500'>
                      <h1 className='text-3xl font-bold text-white mt-[-35px]'>Adoption</h1>
                      <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>We have helped in adoption of well over 10000 children</p>
                      <button className='rounded-full bg-coral-red py-3 px-3.5 text-sm capitalize text-white'>See More</button>                  
                  </div>
              </div>
  
          </div>              
      </div></div>
    )
  }

  export default Our_Work