import React from 'react'
import noProjectImage from '../assets/no-projects.png'
export default function NoProjectedSelected({func1}) {
  return (
    <div className=' mt-24 text-center w-2/4'>
        <img src={noProjectImage} className=' w-16 h-16 mx-auto object-contain'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a projected or get started with a new one</p>
        <p className=' mt-8'>
            <button className='px-4 py-2 text-xs rounded-md text-stone-300 bg-stone-700 hover:bg-slate-600 hover:text-stone-100' onClick={func1}>Create new project</button>
        </p>
    </div>
  )
}
