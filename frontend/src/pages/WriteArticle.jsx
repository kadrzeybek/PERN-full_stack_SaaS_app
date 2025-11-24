import { Edit, Sparkles } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const WriteArticle = () => {

  const articleLengths = [
    {length:800, level:'Short', text: '(500-800 words)'},
    {length:1200, level: 'Medium', text: '(800-1200 words)'},
    {length:1600, level:'Long', text: ' (1200+ words)'},
  ]

  const [selectedLength, setSelectedLength] = useState(articleLengths[0]);

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')

  const { getToken } = useAuth();

  const onSubmitHandler = async(e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const prompt = `Write an article about ${input} in ${selectedLength.length} words.`;
      const { data } = await axios.post('/api/ai/generate-article', {prompt, length: selectedLength.length},{
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      })

      if (data.success) {
        setContent(data.content);
      }else{
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  }
  return (
    <div className=' p-6 flex items-start gap-4 flex-wrap text-slate-700'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full lg:basis-1/3 p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00AD25]'/>
          <h1 className='text-xl font-semibold'>Article Configuration</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Article Topic</p>
        <input onChange={(e) => setInput(e.target.value)} value={input} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='The Future of artifical intelligence is...' required type="text" />
        
        <p className='mt-4 text-sm font-medium'>Article Length</p>
        <div className='mt-3 flex justify-center gap-1.5'>
          {
            articleLengths.map((item, index) => (
              <span onClick={()=> setSelectedLength(item)} className={`text-[10px] sm:text-xs text-center py-1.5 border rounded-xl basis-1/3 cursor-pointer ${selectedLength.text === item.text ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'}`} key={index}>{item.level} <br /> {item.text}</span>
            ))
          }
        </div>
          <br />
          <button disabled={loading} className='flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#56b940] to-[#36e70e] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
          {
          loading ? <span className='size-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span> 
          : 
          <Edit className='w-5' />
          }
            
            Generate Article
          </button>
      </form>
      {/* Right col */}
      <div className='w-full lg:flex-1 p-4 bg-white rounde-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
          <div className='flex items-center gap-3'>
            
            <h1 className='text-xl font-semibold'>Generated Article</h1>
          </div>
          {!content ? (
            <div className='flex flex-1 justify-center items-center'>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Edit className='size-9' />
              <p>Enter a topic click "Generate article" to get started.</p>
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

export default WriteArticle
