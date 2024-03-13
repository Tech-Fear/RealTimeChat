import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-black'>Male</span>
                <input type='checkbox' className='checkbox checkbox-success hover:border-inherit border-black rounded-xl' />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-black'>Female</span>
                <input type='checkbox' className='checkbox checkbox-success hover:border-inherit border-black rounded-xl ' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox


//Starter code for GenderCheckBox component

// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//                 <span className='label-text text-black'>Male</span>
//                 <input type='checkbox' className='checkbox checkbox-success hover:border-inherit border-black rounded-xl' />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//                 <span className='label-text text-black'>Female</span>
//                 <input type='checkbox' className='checkbox checkbox-success hover:border-inherit border-black rounded-xl ' />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckBox