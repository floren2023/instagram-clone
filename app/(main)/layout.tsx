import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div ><Navbar/>
        <main className="p-5">{children}</main>

          </div>
  )
}

export default Layout