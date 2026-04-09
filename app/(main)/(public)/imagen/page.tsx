"use client"
//subir imagen a cloudinary con next cloudinary
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import type { CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import { getCldImageUrl } from 'next-cloudinary';


/* const makeUrl=({public_id}:{public_id:string | null})=>{
  const url = getCldImageUrl({
  width: 300,
  height: 200,
  src: {public_id}
});
} */
const page = () => {
  const [uploadedImage, setUploadedImage] = useState<CloudinaryUploadWidgetInfo| null>(null);


  return (
    <div className='m-auto h-100 w-100 items-center justify-content-center mt-20 '>
        <h1 className='text-red-400 font-bold text-2xl text-center'>Image Upload App</h1>
        
        <div className='dark:bg-white rounded-md dark:text-rose-500 mt-20 text-center'>
          <div >
      
          {/*   <CldUploadWidget uploadPreset="next-cloudinary-app">
  {({ open }) => {
    return (
      <button onClick={() => open()} className="p-2 bg-rose-700 text-white rounded-md">
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget> */}
{/* //presigned endpoint */}

 <CldUploadButton
        signatureEndpoint="/api/sign-cloudinary-params"
          onSuccess={(result) => {
            if (result.info && typeof result.info !== 'string') {
              setUploadedImage(result.info);
              console.log('Upload successful:', result.info);
            }
          }}
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}
        >
          Upload Image
        </CldUploadButton>
{/* <CldUploadWidget signatureEndpoint="/api/sign-cloudinary-params">
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget> */}

        </div>
        {uploadedImage && (
        <div style={{ marginTop: '2rem' }}>
          <p>Upload successful!</p>
          <p><strong>Public ID:</strong> {uploadedImage.public_id}</p>
          <h2 style={{ marginTop: '2rem' }}>Transformed Image:</h2>
      <CldImage
        src={uploadedImage.public_id}
        width="250"
        height="250"
        crop="fill"
        alt="Transformed uploaded image"
      />
    

        </div>
      )}
</div>
    </div>
  )
}

export default page

 



  
  