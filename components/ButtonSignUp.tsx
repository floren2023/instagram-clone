import { UserButton } from "@clerk/nextjs";

const ButtonSignUp = ({email}:{email:string|undefined}) => {
  
  return (
    <div className="flex  gap-2 p-2">
        <div className=" ">
             <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: {
                            height: 30,
                            width: 30,
                          },
                        },
                      }}
                    />
        </div>
                   
                    <div className="text-rose-600 text-xs wrap w-20">
                      {email}
                    </div>
                  </div>

)
}

export default ButtonSignUp