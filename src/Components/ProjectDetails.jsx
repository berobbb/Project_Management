import React from 'react';

export default function ProjectDetails({ project }) {
  return (
    <div className='w-[35rem] mt-16'>
      <h2 className='text-2xl font-bold mb-4'>{project.title}</h2>
      <p className='mb-4'><strong>Description:</strong> {project.description}</p>
      <p><strong>Due Date:</strong> {project.dueDate}</p>
    </div>
  );
}
