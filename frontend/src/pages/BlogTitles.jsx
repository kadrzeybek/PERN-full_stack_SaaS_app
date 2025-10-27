
import { Sparkles, Hash } from 'lucide-react'
import { useState } from 'react'

const BlogTitles = () => {
  const blogCategories = [
    'General', 'Technology', 'Business', 'Health', 'LifeStyle', 'Education', 'Travel', 'food'
  ]
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('General')
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-full p-6 flex lg:items-start gap-4 flex-wrap text-slate-700'>
      {/* Left col */}
      <form onSubmit={onSubmitHandler} className='w-full lg:basis-1/3  p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#8E37EB]'/>
          <h1 className='text-xl font-semibold'>AI Title Generator</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Keyword</p>
        <input onChange={(e) => setInput(e.target.value)} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='The Future of artifical intelligence is...' required type="text" value={input} />
        
        <p className='mt-4 text-sm font-medium'>Category</p>
        <div className='mt-3 flex justify-center gap-1.5 flex-wrap'>
          {
            blogCategories.map((item) => (
              <span onClick={()=> setSelectedCategory(item)} className={`text-[10px] sm:text-xs text-center py-1.5 px-1 border rounded-xl flex-1/5 cursor-pointer ${selectedCategory === item ? 'bg-purple-50 text-purple-700' : 'text-gray-500 border-gray-300'}`} key={item}> {item}</span>
            ))
          }
        </div>
          <br />
          <button className='flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
            <Hash className='w-5' />
            Generate Title
          </button>
      </form>
      {/* Right col */}
      <div className='w-full lg:flex-1 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
          <div className='flex items-center gap-3'>
            <Hash className='size-5 text-[#8E37EB]' />
            <h1 className='text-xl font-semibold'>Generated Titles</h1>
          </div>
          <div className='flex flex-1 justify-center items-center'>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Hash className='size-9' />
              <p>Enter a topic and click "Generate Title" to get started.</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default BlogTitles
