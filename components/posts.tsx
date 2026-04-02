
import PostCard from "./post-card";
import { ImagesResults, Photo } from "@/types/pexels-zod";
import { getPhotos } from "@/lib/pexels";




const Posts = async () => {
  const images: ImagesResults | undefined = await getPhotos("nature");
  if (!images) return;
  <h1 className="m-4 text-2xl font-bold">No images found</h1>;

  return (
 
     

      <div className="flex lg:w-2/3 md:w-full sm:w-full flex-col gap-4 mx-auto ">
      
        {images.photos.map((photo: Photo) => (
          <div className="mt-10  " key={photo.id}>
            <PostCard photo={photo} />
          </div>
        ))}
      </div>
    
  );
};

export default Posts;
