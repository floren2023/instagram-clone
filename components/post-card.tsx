import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const PostCard = () => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardAction className="text-end justify-end w-full pl-4">
          <Badge variant="secondary" >Featured</Badge>
        </CardAction>
      <CardHeader>
        
        <CardTitle className="w-full px-2 text-red-800 font-medium">Design systems meetup</CardTitle>
           </CardHeader>
        <CardDescription className="text-sm text-wrap w-full py-2 px-4">
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
   
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

export default PostCard