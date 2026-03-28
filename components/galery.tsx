"use server"

import { getPhotos } from "@/lib/pexels";
import { ImagesResults, Photo } from "@/types/pexels-zod";


export  const Galery=async () => {
     const images:ImagesResults|undefined=await getPhotos("cars")
  if(!images) return
    <h1 className="m-4 text-2xl font-bold">No images found</h1>

  return (
    <section>
   <ul >
        {images.photos.map((photo:Photo) => (
          <li key={photo.id}>{photo.photographer}
          <img    
            src={photo.src.medium}
            alt={photo.photographer}
            width={300}
            height={200}
          /> </li>
        ))}
      </ul> 
    
    </section>
  )
}

