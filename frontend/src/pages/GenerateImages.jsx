import { useState } from 'react'
import { Sparkles, Image } from 'lucide-react'

const GenerateImages = () => {

    const imageStyles = [
      'Realistic', 'Ghibli Style', 'Anime Style', 'Cartoon Style', 'Fantasy Style', 'Realistic Style', '3D Style', 'Portrait Style'
    ]
    const [input, setInput] = useState('')
    const [selectedStyle, setSelectedStyle] = useState('Realistic')
    const [publish, setPublish] = useState(false)

    const onSubmitHandler = (e) => {
      e.preventDefault()
    }

  return (
    <div className=' p-6 flex lg:items-start gap-4 flex-wrap text-slate-700'>
    {/* Left col */}
    <form onSubmit={onSubmitHandler} className='w-full lg:basis-1/3  p-4 bg-white rounded-lg border border-gray-200'>
      <div className='flex items-center gap-3'>
        <Sparkles className='w-6 text-[#4A7AFF]'/>
        <h1 className='text-xl font-semibold'>AI Image Generator</h1>
      </div>
      <p className='mt-6 text-sm font-medium'>Describe Your Image</p>
      <textarea onChange={(e) => setInput(e.target.value)} rows={3} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='Describe what you want to see in the image...' required type="text" />
      
      <p className='mt-4 text-sm font-medium'>Style</p>
      <div className='mt-3 flex justify-center gap-1.5 flex-wrap'>
        {
          imageStyles.map((item) => (
            <span onClick={()=> setSelectedStyle(item)} className={`text-[10px] sm:text-xs text-center py-1.5 border rounded-xl flex-1/5 cursor-pointer ${selectedStyle === item ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`} key={item}> {item}</span>
          ))
        }
      </div>
      <div className='flex items-center gap-2 my-6'>
        <label className='relative cursor-pointer'>
          <input type="checkbox" onChange={(e) => setPublish(e.target.checked)} checked={publish} className='sr-only peer' />
          <div className='rounded-full peer-checked:bg-green-500 transition w-9 h-5 bg-slate-300'></div>
          <span className='absolute left-1 top-1 size-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
        </label>
        <p>Make this image public</p>
      </div>
        <button className='flex w-full justify-center items-center gap-2 bg-linear-to-r from-[#4A7AFF] to-[#65ADFF] text-white px-4 py-2 rounded-lg text-sm cursor-pointer'>
          <Image className='w-5' />
          Generate Image
        </button>
    </form>
    {/* Right col */}
    <div className='w-full lg:flex-1 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <Image className='size-5 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Generated Images</h1>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='size-9' />
            <p>Enter a topic and click "Generate Image" to get started.</p>
          </div>
        </div>
    </div>

  </div>
  )
}

export default GenerateImages
