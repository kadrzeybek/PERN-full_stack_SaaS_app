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
            <button className="text-[#0fa416] px-4 py-1 rounded-lg min-w-24 bg-[#effff2] border border-[#b3f9a7]">{item.type}</button>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0 mt-0'}`}>
                {item.type === 'image' ? (
                    <div>
                        <img src={item.content} alt="image" className="w-full max-w-md" />
                    </div>
                ) : (
                    <div className="mt-3 max-h-80 overflow-y-auto text-sm text-slate-700 bg-gray-50 p-2 rounded-lg">
                        <div className='reset-tw'>
                            <MarkDown>
                                {item.content}
                            </MarkDown>
                        </div>
                    </div>
                )}
        </div>
    </div>
  )
}

export default CreationItem
