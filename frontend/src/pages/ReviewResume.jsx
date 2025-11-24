import { useState } from 'react'
import { Sparkles, FileText } from 'lucide-react'
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';
import Markdown from 'react-markdown';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ReviewResume = () => {

  const [input, setInput] = useState('');

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const {getToken} = useAuth();

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('resume', input);
      
      

      const { data } = await axios.post('/api/ai/resume-review', formData, 
        {headers: {Authorization: `Bearer ${await getToken()}`}})


        if(data.success) {
          setContent(data.content);
        } else {
          toast.error(data.message);
        }
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
    setLoading(false);

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
        <button disabled={loading} className='mt-6 flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#cbc813] to-[#e2df16] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
          {loading ? <span className='size-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span> : <FileText className='w-5'/>}
          Review Resume
        </button>
    </form>
    {/* Right col */}
    <div className='w-full lg:flex-1 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[90vh]'>
        <div className='flex items-center gap-3'>
          <FileText className='size-5 text-[#e2df16]' />
          <h1 className='text-xl font-semibold'>Analysis Result</h1>
        </div>
        { !content ? (
          <div className='flex flex-1 justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <FileText className='size-9' />
            <p>Upload a resume and  click "Review Resume" to get started.</p>
          </div>
        </div>
        ) : (
          <div className='mt-3 h-full overflow-y-auto text-sm text-slate-600'>
            <div className='reset-tw'>
              <Markdown>
                {content}
              </Markdown>
            </div>
          </div>
        )}
        
    </div>

  </div>
  )
}

export default ReviewResume
