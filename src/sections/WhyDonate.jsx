import { aboutus, mainlogo } from "../assets/images";
import { Link } from "react-router-dom";
const WhyDonate = () => {
  return (
<section className='flex flex-1 flex-col justify-center items-center'>
    <div className="flex gap-10">
      <div className="w-4/5 md:w-2/5 ">
        <img src={aboutus} alt="about us" className="h-full cover"/>
      </div>

      <div className="w-4/5 md:w-3/6">
         <h1 className="pb-1 font-montserrat text-4xl">
          About Us</h1>
          <div className="w-[240px] bg-coral-red rounded-lg h-[5px] mb-6"></div>
          <p className="font-palanquin text-xl pb-3"> At Care Connect, we believe in the transformative power of compassion and connection. Our mission is to create a positive impact on the lives of orphaned children, fostering a sense of belonging and providing them with the support they need to thrive.
We envision a world where every child, regardless of their circumstances, experiences love, care, and opportunities for a brighter future. Care Connect: Orphanage Edition is our dedicated effort to make this vision a reality.

</p>   
<p className="font-palanquin text-xl">Care Connect is more than just an organization; we are a community of individuals driven by the shared belief that every child deserves a nurturing environment. Our team consists of passionate volunteers, donors, and advocates who are committed to making a difference in the lives of orphaned children.
</p>     
              
          <Link to = '/signup'>Go</Link> 
      </div>
      <div></div>

    </div>
</section>
  )
}

export default WhyDonate
