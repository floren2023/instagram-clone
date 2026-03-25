import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col gap-4 text-4xl m-auto text-center text-neutral-500">Not Autohorized
        <Link href="/">Home</Link>
    </div>
  )
}

export default page