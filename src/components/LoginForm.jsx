import React from 'react'
import { useSignIn } from 'react-supabase'



export default function LoginForm({auth,navigation,setAuth ,step}) {
const [{ error, fetching, session, user }, signIn] = useSignIn()
const { email, password} = auth


const onLogin = async (event) => {
    event.preventDefault()
  
    
    const { error, session, user } = await signIn({
        email: email,
        password: password,
      })

     

      if(error){
          alert(error.message)
      }
      if(user){
          window.location.href = "/admin/"
      }

}



    return (
        <div>
           
           <div className="flex flex-row w-full items-center">
            <button className=" input bg-indigo-500 text-white"   onClick={()=> navigation.previous()}  >Login</button>
            <button className="input "  onClick={() => navigation.next()} >Sign Up</button>
            </div>
           <input type="email" className ="input" placeholder="Email" name="email"  value={email} onChange={ setAuth } />
            <input type="password" className="input" placeholder="Password" name="password"  type="password" value={password} onChange={setAuth}/>
            <div className="flex flex-col w-full items-center">
            <button className=" w-36 text-white font-bold bg-indigo-500 mb-2 p-1 "  onClick={(event) => onLogin(event)} >Login</button>
            </div>
        </div>
    )
}
