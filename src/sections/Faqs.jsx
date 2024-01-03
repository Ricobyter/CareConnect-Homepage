import React, { useState } from 'react';
import { faqs } from '../constants';
import Accordion from '../components/Accordion';


const Faqs = () => {
    const[data, setData] = useState(faqs);
  return (
<section className=''>
    <div className='flex flex-1 flex-col flex-wrap justify-center items-center'>
        <h1 className='text-4xl max-sm:text-3xl font-montserrat pb-5 text-center'>Some frequently <span className='text-coral-red'>asked </span>Questions</h1>        
        {
            data.map((currentElement) => {
                const {id} = currentElement;
                 return <Accordion key = {id} {...currentElement}/>
            })
}        
    </div>

</section>
  )
}

export default Faqs
