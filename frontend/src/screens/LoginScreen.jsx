// import React,{useState,useEffect} from 'react'
// // import { Input } from "@material-tailwind/react";
// import {Link,useNavigate} from 'react-router-dom';
// import { useDispatch,useSelector } from "react-redux";
// import {useLoginMutation} from '../slices/userApiSlice.js'
// import { setCredentials } from "../slices/authSlice.js";
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignIn = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
 
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [Login, {isLoading}] = useLoginMutation();
//   const {userInfo} = useSelector((state) => state.auth);

//   // const { search } = useLocation();
//   // const sp = new URLSearchParams(search);
//   // const redirect = sp.get("redirect" || "/");

//   useEffect(() => { 
//     if (userInfo) {
//       navigate();
//     }
//   }, [userInfo]);

//   const handleLogin = async(e)=>{
//     e.preventDefault();
//     console.log("submit")

//     try {
//       const response = await Login({email,password}).unwrap();
//       dispatch(setCredentials({...response}))
//       navigate('/homeScreen');
//       toast.success("SignIn Successfully")
//       }catch (err) {
//       toast.error(err?.response?.data?.message || err.message);
//     }
//   };
//   return (
//     <div className='py-2 pl-72 pt-16 '>
//         <form className='h-60 w-68 bg-sky-100 inline-block'>
//           <h1 className='text-center pt-2 text-xl '>Sign In</h1>
//         <div className=' px-8 flex-row content-around p-2' >
//             <label htmlFor="email" className='flex-col inline'>Email</label>
//             <input type='email' placeholder='Enter your E-mail' name='email' className='block outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             <label htmlFor="password" className='flex-col inline'>Password</label>
//             <input type='password' placeholder='Enter Password' name='password' className='block outline-none' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//           <div className='pt-2'  >
//           <button type='submit' className=' bg-orange-500'onClick={handleLogin} >Login</button>
//           </div>
//         </div>
//         <div className='align-center pt-2'>
//           Already haven't an account ? <Link to={"/register"}>Register</Link>
//         </div>
//         </form>
//     </div>
//   )
// }

// export default SignIn;