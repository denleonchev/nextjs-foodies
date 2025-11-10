"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function ImagePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [pickedImage, setPickedImage] = useState("");
  const imageInput = useRef<HTMLInputElement | null>(null);

  function handlePickClick() {
    imageInput.current!.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files || !files[0]) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const result = fileReader.result as string;
      setPickedImage(result);
    };

    fileReader.readAsDataURL(files[0]);
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <div className="flex gap-2">
        <button
          className="self-start p-2 bg-gray-600 rounded-sm"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>

        <div className="relative w-40 h-40 flex items-center justify-center border-2 rounded-sm">
          {pickedImage ? (
            <Image
              className="object-cover"
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          ) : (
            <p className="w-4/5 text-center">No image picked yet.</p>
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
