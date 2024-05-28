import React, { useEffect } from 'react';
import { Pencil } from 'lucide-react';
import Image from "next/image";
import toast from 'react-hot-toast';
import { UploadDropzone } from '@/types/utils/uploadthing';

type ImageInputProps = {
    label: string;
    imageUrl?: string;
    setImageUrl: (url: string) => void;
    className?: string;
    endpoint: "doctorProfileImage"; // Assume 'doctorProfileImage' is the only expected endpoint for now
};

export default function ImageInput({
    label,
    imageUrl = "",
    setImageUrl,
    className = "col-span-full",
    endpoint
}: ImageInputProps) {
    // Effect to log the current image URL to help track its changes
    useEffect(() => {
        console.log("Current Image URL:", imageUrl);
    }, [imageUrl]);

    const handleImageUpload = (res: any) => {
        console.log("Upload response:", res); // Debugging the response
        if (res.error) {
            console.error("Upload error:", res.error);
            toast.error("Failed to upload image.");
        } else if (res[0] && res[0].url) {
            setImageUrl(res[0].url);
            toast.success("Image uploaded successfully");
        } else {
            toast.error("Unexpected response format.");
        }
    };

    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label htmlFor="image-input" className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2'>
                    {label}
                </label>
                {imageUrl && (
                    <button onClick={() => setImageUrl("")} type='button' className='space-x-2 flex bg-blue rounded-md shadow'>
                        <Pencil className='w-5 h-5' />
                        <span className='text-red-700'>Change image</span>
                    </button>
                )}
            </div>
            {imageUrl ? (
                <Image 
                    src={imageUrl}
                    alt='item-image'
                    width={1000}
                    height={667}
                    className='w-full h-64 object-contain'
                    loading="eager" // Ensure the image is loaded as soon as it's in the viewport
                />
            ) : (
                <UploadDropzone
                    className='text-cyan font-extralight text-sm'
                    endpoint={endpoint}
                    onClientUploadComplete={handleImageUpload}
                />
            )}
        </div>
    );
}
