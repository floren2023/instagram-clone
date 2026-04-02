"use client"

import { useUser } from "@clerk/nextjs"

const page = () => {


      const { isSignedIn, user, isLoaded } = useUser()

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>

  // Protect the page from unauthenticated users
  if (!isSignedIn) return <div>Sign in to view this page</div>

  return <div>Hello {user.id}!
  {user.fullName}{user.primaryEmailAddress?.emailAddress}
  
  </div>
}




export default page