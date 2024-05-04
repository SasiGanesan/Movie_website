import React from 'react'

const HomeScreen = () => {
  return (
    <form className='w-96 flex items-center' >
        <div className=''>
        <input className='p-4 outline-none align-middle' type='text' placeholder='Search Movie...' title='title' />
        <button type='submit' className=''></button>
        </div>
    </form>
  )
}

export default HomeScreen