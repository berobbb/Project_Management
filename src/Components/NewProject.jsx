import { useState } from "react";
import Input from './Input';

export default function NewProject({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSave() {
    if (title.trim()) {
      addProject({ title, description, dueDate });  // Pass the entire project object
    }
  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li className='text-stone-800 hover:text-stone-500'>
          <button>Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} textArea />
        <Input label="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
    </div>
  );
}
