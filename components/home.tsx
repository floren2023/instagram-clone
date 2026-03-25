
"use client"
import {  useUser } from '@clerk/nextjs'

import Navbar from './Navbar'
import { redirect } from 'next/navigation'

const HomePage = () => {
     const {user,isSignedIn}=useUser()
     if(isSignedIn){
        redirect("/dashboard")
     }
  return (
     
    <>
      {!isSignedIn&&(
            
            <Navbar/>
           
            

            
        )}

    </>
  
  )    
}

export default HomePage