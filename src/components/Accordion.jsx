import React, { useState } from 'react'

const Accordion = ({question, answer}) => {
    const[show, setShow] = useState(false);

  return (
    <div>
        <div className='mt-2 w-[75vw]  sm:w-[90vw] p-2 border-pale-blue rounded-sm '>       
             <div className='flex justify-between bg-pale-blue'><h1 className='text-2xl text-center font-montserrat py-2 px-3' >{question}</h1><p className='text-2xl font-bold cursor-pointer' onClick={() => setShow(!show)}>{show ? '➖' : '➕'}</p></div>
        {
            show && <p className='text-xl font-palanquin pt-1'>{answer}</p>
        }
      
      
   

        </div>
        </div>

  )
}


export default Accordion
