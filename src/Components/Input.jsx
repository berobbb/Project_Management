import React from 'react'

export default function Input({ label, textArea, ...props }) {
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textArea ? (
        <textarea
          className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline focus:border-stone-600'
          {...props}
        />
      ) : label === "Due Date" ? (  // Conditional rendering for "Due Date"
        <input
          type='date'
          className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline focus:border-stone-600'
          {...props}
        />
      ) : (
        <input
          className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline focus:border-stone-600'
          {...props}
        />
      )}
    </p>
  )
}
