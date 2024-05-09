import React from 'react'
import {Link} from 'react-router-dom';
// import { useSelector } from 'react-redux';


const Header = () => {

  // const { userInfo } = useSelector((state) => state.auth)

  return (
    <>
    <div className="bg-black text-yellow-400 text-center p-10">
      <h1 className="font-bold">Movie Website</h1>
      <div className='float-right flex flex-row space-x-4  '>
      {/* <Link to='/login' className='inline-block hover:bg-slate-500 rounded-lg py-2 px-4'>Sign In </Link> */}
      <Link to ='/actorForm' className='inline-block hover:bg-slate-500 rounded-lg py-2 px-4'>Add Actor</Link>
      <Link to ='/movieForm'className='inline-block hover:bg-slate-500 rounded-lg py-2 px-4'>Add Movie Form</Link>
      <Link to ='/producerForm' className='inline-block hover:bg-slate-500 rounded-lg py-2 px-4'>Add Producer</Link>
      {/* <Link to='/register' className='inline-block'>Register </p> */}
      </div>
    </div>
    </>
  )
}

export default Header