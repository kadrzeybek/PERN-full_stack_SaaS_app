import { useState } from 'react'
import { Sparkles, Eraser } from 'lucide-react';

const RemoveBackground = () => {
  const blogCategories = ['Technology', 'Health', 'Finance', 'Travel', 'Food', 'Lifestyle', 'Education', 'Entertainment'];
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className=' p-6 flex lg:items-start gap-4 flex-wrap text-slate-700'>
    {/* Left col */}
    <form onSubmit={onSubmitHandler} className='w-full lg:basis-1/3  p-4 bg-white rounded-lg border border-gray-200'>
      <div className='flex items-center gap-3'>
        <Sparkles className='w-6 text-[#FF4938]'/>
        <h1 className='text-xl font-semibold'>Background Remover </h1>
      </div>
      <p className='mt-6 text-sm font-medium'>Upload Image</p>
      <input onChange={(e) => setInput(e.target.files[0])} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required type="file" accept='image/*' />
      <p className='text-xs text-gray-500 font-light mt-1'>Supports JPG, PNG and other image formats</p>
        <button className='mt-6 flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
          <Eraser className='w-5' />
          Remove Background
        </button>
    </form>
    {/* Right col */}
    <div className='w-full lg:flex-1 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Eraser className='size-5 text-[#FF4938]' />
          <h1 className='text-xl font-semibold'>Processed Images</h1>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Eraser className='size-9' />
            <p>Upload an image and  click "Remove Background" to get started.</p>
          </div>
        </div>
    </div>

  </div>
  )
}

export default RemoveBackground
