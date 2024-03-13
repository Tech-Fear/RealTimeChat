import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-gray-100'/>
        <button type='submit' className='btn btn-circle bg-gradient-to-r  from-pink-100 via-red-200 to-pink-300 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none fill-gray-900"/>
        </button>
    </form>
  )
}

export default SearchInput

//Starter Code for SearchInput

// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-gray-100'/>
//         <button type='submit' className='btn btn-circle bg-gradient-to-r  from-pink-200 via-red-200 to-pink-400 text-white'>
//             <IoSearchSharp className="w-6 h-6 outline-none fill-gray-900"/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput