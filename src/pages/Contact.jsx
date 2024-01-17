import React from 'react'

const Contact = () => {
  return (
    <div className='w-[70%] mx-auto py-12'>
    <h2 className='text-indigo-500 text-center text-4xl font-bold mb-12'>Get in touch</h2>
    <div className='w-[80%] mx-auto bg-slate-900 p-12 rounded-xl'>
      <form className='grid grid-cols-1 gap-4'>
        <input className='p-4 text-lg rounded-md bg-slate-950' placeholder='Name' />
        <input className='p-4 text-lg rounded-md bg-slate-950' placeholder='Email'/>
        <textarea rows={4} className='p-4 text-lg rounded-md bg-slate-950 resize-none' placeholder='Message'></textarea>
        <button className='bg-indigo-500 mt-4 p-4 text-white text-2xl font-bold rounded-lg'>Send</button>
      </form>
    </div>
    
</div>
  )
}

export default Contact