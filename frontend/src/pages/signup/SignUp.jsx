import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <h1 className='text-3xl font-semibold text-center text-gray-100'>
        <span className=' text-gray-800'>ChatApp</span>
      </h1>
      <form>
      <div>
          <label className='label p-2'>
            <span className='text-base label-text text-black'>Full Name</span>
          </label>
          <input type='text' placeholder="Enter Full Name" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-black'>Username</span>
          </label>
          <input type='text' placeholder="Enter username" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
        </div>
        <div >
          <label className='label p-2'>
            <span className='text-base label-text text-black'>Password</span>
          </label>
          <input type='password' placeholder="Enter password" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
        </div>
        <div >
          <label className='label p-2'>
            <span className='text-base label-text text-black'>Confirm Password</span>
          </label>
          <input type='password' placeholder="Enter confirm password" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
        </div>
        <GenderCheckBox/>
        <div>
          <button className='btn btn-block btn-glass btn-sm mt-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-center'>Sign Up</button>
        </div>
        <a href='#' className="pt-3 flex justify-center text-sm hover:underline hover:text-blue-500 text-gray-800">Already have an account?</a>
      </form>
      </div>
    </div>
  )
}

export default SignUp

//Starter code for the SignUp component
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
//       <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
//       <h1 className='text-3xl font-semibold text-center text-gray-100'>
//         <span className=' text-gray-800'>ChatApp</span>
//       </h1>
//       <form>
//       <div>
//           <label className='label p-2'>
//             <span className='text-base label-text text-black'>Full Name</span>
//           </label>
//           <input type='text' placeholder="Enter Full Name" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
//         </div>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text text-black'>Username</span>
//           </label>
//           <input type='text' placeholder="Enter username" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
//         </div>
//         <div >
//           <label className='label p-2'>
//             <span className='text-base label-text text-black'>Password</span>
//           </label>
//           <input type='password' placeholder="Enter password" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
//         </div>
//         <div >
//           <label className='label p-2'>
//             <span className='text-base label-text text-black'>Confirm Password</span>
//           </label>
//           <input type='password' placeholder="Enter confirm password" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
//         </div>
//         <GenderCheckBox/>
//         <div>
//           <button className='btn btn-block btn-glass btn-sm mt-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-center'>Sign Up</button>
//         </div>
//         <a href='#' className="pt-3 flex justify-center text-sm hover:underline hover:text-blue-500 text-gray-800">Already have an account?</a>
//       </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp