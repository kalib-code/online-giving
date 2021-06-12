import React,{useState} from 'react'
import HeaderAdmin from '../components/admin/HeaderAdmin'
import FooterAdmin from '../components/admin/FooterAdmin'
import { useAuth } from '../auth/hooks'





export default function AdminScreen() {

   
    const { session, user } = useAuth()

    console.log(session)

    return (
        <div>

            <HeaderAdmin />

            <FooterAdmin />
           
        </div>
    )
}
