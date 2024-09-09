import React from 'react';

export default function Sidebar({ func1, projects, selectProject }) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase text-stone-200'>Your Projects</h2>
     
      <div>
        <button className='px-4 py-2 text-xs rounded-md bg-stone-700 hover:bg-slate-600 hover:text-stone-100' onClick={func1}>
          + Add Project
        </button>
        <ul className='mb-8'>
          {projects.map((project, index) => (
            <li key={index} className='my-2 text-stone-200 cursor-pointer' onClick={() => selectProject(index)}>
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
