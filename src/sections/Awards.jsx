import { sampleimg, award, award1, award4, award5 } from '../assets/images'

const Awards = () => {
  return (
<section>
 <div className='flex flex-1 flew-wrap flex-col'>
    <h1 className='text-4xl font-montserrat text-center mb-10'>
      Our <span className='text-coral-red'>Awards</span> 
    </h1>
    <div className='flex flex-1 justify-between items-center flex-row flew-wrap max-sm:flex-col'>
      <div className='flex flex-col w-[300px] justify-center items-center'>
        <img src={award} alt="awards" width={200} height={100} />
        <p className='mt-7'>Public Welfare Award </p>

      </div>
      <div className='flex flex-col w-[300px] justify-center items-center'>
        <img src={award1} alt="awards" width={200} height={100} />
        <p className='mt-7'>Child Help Foundation </p>

      </div>
      <div className='flex flex-col w-[300px] justify-center items-center'>
        <img src={award4} alt="awards" width={160} height={100} />
        <p className='mt-7'>Best Non Profit Organization </p>

      </div>
      <div className='flex flex-col w-[300px] justify-center items-center'>
        <img src={award5} alt="awards" width={160} height={100} />
        <p className='mt-7'>NGO of Excellence</p>

      </div>          
    </div>
 </div>
</section>
  )
}

export default Awards
