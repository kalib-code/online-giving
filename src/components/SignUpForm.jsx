import React from 'react'
import { useSignUp } from 'react-supabase'

export default function SignUpForm({auth,navigation,setAuth}) {

    const [{ error, fetching, session, user }, signUp] = useSignUp()
    const { email, password} = auth

    const onSignup = async (event) =>{

        event.preventDefault()
    
       const { error, session, user } = await signUp({
      email: email,
      password: password,
    })
    
        if(error){
            alert(error)
        }
        if(user){
          navigation.previous();
        }
    
    }
    return (
        <div className="">
        
        <div className="flex flex-row w-full items-center">
            <button className=" input"   onClick={()=> navigation.previous()}  >Login</button>
            <button className="input bg-indigo-500 text-white"  onClick={() => navigation.next()} >Sign Up</button>
            </div>
           <input type="email" className ="input" placeholder="Email"  value={email} name="email" onChange={setAuth} />
            <input type="password" className="input" placeholder="Password" type="password" name="password" value={password} onChange={setAuth}/>
            <div className="flex flex-col w-full items-center">
            <button className=" w-36 text-white font-bold bg-indigo-500 mb-2 p-1  "  onClick={(event) => onSignup(event)} >Sign Up</button>
            </div>
        </div>
    )
}
