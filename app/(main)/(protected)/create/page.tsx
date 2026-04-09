"use client"



import { useUser } from '@clerk/nextjs'
import { PostForm } from './CreatePost';


const page = () => {
   const { isLoaded, isSignedIn, user } = useUser();
  
    if (!isLoaded) {
      return <div>Cargando...</div>;
    }
  
    if (!isSignedIn) {
      return <div>No has iniciado sesión.</div>;
    }
  
  return (
    <div className="mx-auto mt-10 justify-center items-center"> <PostForm />

   


    </div>
  )
}

export default page
