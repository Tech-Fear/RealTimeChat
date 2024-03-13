import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
const MessagesContainer = () => {
const NoChatSelected=true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
        {NoChatSelected ? (
            <NoChatSelectedComponent/>
        ) : (
        <>
        <div className='px-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>John Doe</span>
        </div>
        <Messages/> 
        <MessageInput/> 
        </>
        )}
    </div>
  )
}

export default MessagesContainer

const NoChatSelectedComponent = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Jhon Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="sm:text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  )
}

//Starter Code MessageContainer

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// const MessagesContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         <div className='px-2 mb-2'>
//             <span className='label-text'>To: </span>
//             <span className='text-gray-900 font-bold'>John Doe</span>
//         </div>
//         <Messages/> 
//         <MessageInput/> 
//         </>
//     </div>
//   )
// }

// export default MessagesContainer