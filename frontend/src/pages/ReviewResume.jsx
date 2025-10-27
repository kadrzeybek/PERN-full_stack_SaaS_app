import { useState } from 'react'
import { Sparkles, FileText } from 'lucide-react'

const ReviewResume = () => {

  const [input, setInput] = useState('');
  const onSubmitHandler = (e) => {
      e.preventDefault()
    }
  return (
    <div className=' p-6 flex lg:items-start gap-4 flex-wrap text-slate-700'>
    {/* Left col */}
    <form onSubmit={onSubmitHandler} className='w-full lg:basis-1/3  p-4 bg-white rounded-lg border border-gray-200'>
      <div className='flex items-center gap-3'>
        <Sparkles className='w-6 text-[#e2df16]'/>
        <h1 className='text-xl font-semibold'>Resume Review </h1>
      </div>
      <p className='mt-6 text-sm font-medium'>Upload Resume</p>
      <input onChange={(e) => setInput(e.target.files[0])} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required type="file" accept='application/pdf' />
      <p className='text-xs text-gray-500 font-light mt-1'>Supports PDF resume only</p>
        <button className='mt-6 flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#cbc813] to-[#e2df16] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
          <FileText className='w-5' />
          Review Resume
        </button>
    </form>
    {/* Right col */}
    <div className='w-full lg:flex-1 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <FileText className='size-5 text-[#e2df16]' />
          <h1 className='text-xl font-semibold'>Anlaysis Results</h1>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <FileText className='size-9' />
            <p>Upload a resume and  click "Review Resume" to get started.</p>
          </div>
        </div>
    </div>

  </div>
  )
}

export default ReviewResume
