import React from 'react'

const Conversation = () => {
  return <>
  <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 py-1 cursor-pointer'>
    <div className="avatar online">
        <div className="w-12 rounded-flow">
            <img src="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png " alt="user avatar"/>
        </div>
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex gap-3 justify-between">
        <p className="font-bold text-gray-800">Jhon Doe</p>
        <span className='text-xl'>🔥🎃</span>
      </div>
    </div>
  </div>
  <div className='divider py-0 my-0 h-1'/>
  </>
}

export default Conversation

//Starter Code for Conversation Component

// import React from 'react'

// const Conversation = () => {
//   return <>
//   <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 py-1 cursor-pointer'>
//     <div className="avatar online">
//         <div className="w-12 rounded-flow">
//             <img src="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png " alt="user avatar"/>
//         </div>
//     </div>
//     <div className="flex flex-col flex-1">
//       <div className="flex gap-3 justify-between">
//         <p className="font-bold text-gray-800">Jhon Doe</p>
//         <span className='text-xl'>🔥🎃</span>
//       </div>
//     </div>
//   </div>
//   <div className='divider py-0 my-0 h-1'/>
//   </>
// }

// export default Conversation