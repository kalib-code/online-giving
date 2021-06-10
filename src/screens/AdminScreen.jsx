import React, {useEffect , useState} from 'react'
import HeaderAdmin from '../components/admin/HeaderAdmin'
import FooterAdmin from '../components/admin/FooterAdmin'

export default function AdminScreen() {
    //headers
    //body
    //footer
    const [ isSession , setIsSession] = useState('')
const session = localStorage.getItem("supabase.auth.token");
 const jsonSession = JSON.parse(session)
 console.log(jsonSession)

 useEffect(()=>{
    if(!jsonSession.access_token){
       // window.location.href = "/login/"
    }
  

 })
    return (
        <div>
            <HeaderAdmin />
            <FooterAdmin />
           
        </div>
    )
}
