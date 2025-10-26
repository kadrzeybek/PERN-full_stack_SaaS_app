import  { useState } from 'react';
import MarkDown from 'react-markdown';

const CreationItem = ({item}) => {

    const [expanded, setExpanded] = useState(false);
  return (
    <div onClick={() => setExpanded(!expanded)} className="text-sm border bg-white border-gray-200 rounded-lg cursor-pointer max-w-full p-4">
        <div className="flex justify-between items-center gap-4">
            <div>
                <h2>{item.prompt}</h2>
                <p className="text-gray-500">{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <button className="text-[#1E40AF] px-4 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">{item.type}</button>
        </div>
        {
            expanded && (
                <div>
                    {item.type === 'image' ? (
                        <div>
                            <img src={item.content} alt="image" className="w-full max-w-md" />
                        </div>
                    ) :(
                        <div className="mt-3 h-full overflow-y-scroll max-h-100 text-sm text-slate-700">
                            <div className='reset-tw'>
                                <MarkDown>
                                {item.content}
                                </MarkDown>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    </div>
  )
}

export default CreationItem
