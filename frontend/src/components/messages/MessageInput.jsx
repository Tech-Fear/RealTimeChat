import React from 'react'
import { BsSend } from 'react-icons/bs'
const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 text-black bg-gray-100' placeholder='Type Your Message...'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
                <BsSend className='text-black'/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput

// Starter Code MessageInput

// import React from 'react'
// import { BsSend } from 'react-icons/bs'
// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 text-black bg-gray-100' placeholder='Type Your Message...'/>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
//                 <BsSend className='text-black'/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput