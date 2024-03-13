import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image'>
            <div className='w-10 rounded-full'>
                <img alt="Chat Bubble Pic"
                src={"https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png"}/>
            </div>
        </div>
        <div className={'chat-bubble bg-violet-200 text-white'}>Hi! Whats up?</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
    </div>
  )
}

export default Message

//Starter Code for Message
// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image'>
//             <div className='w-10 rounded-full'>
//                 <img alt="Chat Bubble Pic"
//                 src={"https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png"}/>
//             </div>
//         </div>
//         <div className={'chat-bubble bg-violet-200 text-white'}>Hi! Whats up?</div>
//         <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
//     </div>
//   )
// }

// export default Message