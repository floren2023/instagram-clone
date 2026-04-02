"use client"
import App from "./App"
import { TanStackDevtools } from '@tanstack/react-devtools'
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools'

const page = () => {
  return (
    <div> <App />

    <TanStackDevtools
      config={{ hideUntilHover: true }}
      plugins={[formDevtoolsPlugin()]}
    />


    </div>
  )
}

export default page
