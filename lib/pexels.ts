
import {ImagesSchemaWithPhotos, type ImagesResults} from "@/types/pexels-zod" 

export async function getPhotos(query: string ): Promise<ImagesResults|undefined >{
  try{
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=12`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY as string,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener fotos");
  }
  const imagesResults:ImagesResults=await res.json()
  
  //parse data with zod schema
  const parsedData=ImagesSchemaWithPhotos.parse(imagesResults)
  if(parsedData.total_results===0) return undefined
  else 
    return parsedData

  }catch(e){
    //message in terminal console
    if(e instanceof Error)
      console.log(e.stack)

  }

  
}