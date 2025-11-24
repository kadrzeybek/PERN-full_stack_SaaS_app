import { useState } from 'react'
import { Sparkles, Scissors } from 'lucide-react'
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const RemoveObject = () => {

  const [input, setInput] = useState('')
  const [object, setObject] = useState('')

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const {getToken} = useAuth();

  
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if(object.split(' ').length > 1){
        return toast.error("Please provide only single object name");
      }
      const formData = new FormData();
      formData.append('image', input);
      formData.append('object', object);


      const { data } = await axios.post('/api/ai/remove-image-object', formData, 
        {headers: {Authorization: `Bearer ${await getToken()}`}})

        if(data.success) {
          setContent(data.content);
        } else {
          toast.error(data.message);
        }
    
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
    }
  return (
    <div className=' p-6 flex lg:items-start gap-4 flex-wrap text-slate-700'>
    {/* Left col */}
    <form onSubmit={onSubmitHandler} className='w-full lg:basis-1/3  p-4 bg-white rounded-lg border border-gray-200'>
      <div className='flex items-center gap-3'>
        <Sparkles className='w-6 text-[#4A7AFF]'/>
        <h1 className='text-xl font-semibold'>Object Remover </h1>
      </div>
      <p className='mt-6 text-sm font-medium'>Upload Image</p>

      <input onChange={(e) => setInput(e.target.files[0])} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required type="file" accept='image/*' />
      
      <p className='mt-6 text-sm font-medium'>Describe Object Name to Remove</p>
      <textarea onChange={(e) => setObject(e.target.value)} value={object} rows={3} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='e.g., watch or spoon, only single object name...' required type="text" />

        <button disabled={loading} className='mt-6 flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
          {loading ? <span className='size-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span> : <Scissors className='w-5' />}
          Remove Object
        </button>
    </form>
    {/* Right col */}
    <div className='w-full lg:flex-1 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Scissors className='size-5 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Processed Images</h1>
        </div>
        { !content ? (
        <div className='flex flex-1 justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Scissors className='size-9' />
            <p>Upload an image and click "Remove Object" to get started.</p>
          </div>
        </div>
        ) : (
          <div mt-3 h-full>
          <img src={content} alt="image" className='w-full h-full'/>
        </div>
        )
        }
    </div>

  </div>
  )
}

export default RemoveObject
