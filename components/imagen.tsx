"use client";
//subir imagen a cloudinary con next cloudinary
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import type { CloudinaryUploadWidgetInfo } from "next-cloudinary";

export const UploadImagen = () => {
  const [uploadedImage, setUploadedImage] =
    useState<CloudinaryUploadWidgetInfo | null>(null);

  return (
    <div className="  items-start ">
      <div className="my-4 bg-rose-600 text-white text-md p-1 w-40 text-center rounded-md ">
        <CldUploadButton
          signatureEndpoint="/api/sign-cloudinary-params"
          onSuccess={(result) => {
            if (result.info && typeof result.info !== "string") {
              setUploadedImage(result.info);
              console.log("Upload successful:", result.info);
            }
          }}
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}
        >
          Upload Image
        </CldUploadButton>
      </div>
      {uploadedImage && (
        <div style={{ marginTop: "2rem" }}>
          <p>Upload successful!</p>
          <p>
            <strong>Public ID:</strong> {uploadedImage.public_id}
          </p>
          <h2 style={{ marginTop: "2rem" }}>Transformed Image:</h2>
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
  );
};
