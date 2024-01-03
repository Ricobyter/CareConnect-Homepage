
// import { star } from '../assets/icons'

const Card = ({imgURL, stats, feedback, rating}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt="image" className='rounded-full object-contain w-[120px] h-[120px]' />
      <h3 className='mt-1 font-palanquin font-bold text-3xl text-center'>{stats}</h3>
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='flex mt-3 items-center gap-3'>
        <img src={star} alt="star" width={24} height={24} className='object-contain m-0'/>
        <p className='font-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
    </div>
  )
}

export default Card
