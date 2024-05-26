import React from 'react';
import { Pencil } from 'lucide-react';
import Image from "next/image";
import toast from 'react-hot-toast';
import { UploadDropzone } from '@/types/utils/uploadthing';

type ImageInputProps = {
    label: string;
    imageUrl?: string;
    setImageUrl:  (url: string | undefined) => void;
    className?: string;
    endpoint: "doctorProfileImage" | "doctorProfessionalDocs";// Correct type if known, otherwise 'any' can be used as a fallback
};

export default function ImageInput({
    label,
    imageUrl = "",
    setImageUrl,
    className = "col-span-full",
    endpoint // Include endpoint in the destructured props
}: ImageInputProps) {
    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label htmlFor="course-image"
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2'
                >
                    {label}
                </label>
                {imageUrl && (
                    <button onClick={() => setImageUrl("")}
                        type='button'
                        className='space-x-2 flex bg-blue rounded-md shadow'
                    >
                        <Pencil className='w-5 h-5' />
                        <span className='text-red-700'>Change image</span>
                    </button>
                )}
            </div>
            {imageUrl ? (
                <Image src={imageUrl}
                    alt='item-image'
                    width={1000}
                    height={667}
                    className='w-full h-64 object-contain'
                />
            ) : (
                <UploadDropzone
    className='text-cyan font-extralight text-sm'
    endpoint={endpoint}
    onClientUploadComplete={(res: any) => {
        if (res.error) {
            console.error("Upload error:", res.error);
            toast.error("Failed to upload image.");
        } else {
            setImageUrl(res[0].url);
            toast.success("Image uploaded successfully");
        }
    }}
/>
                
            )}
        
        </div>
    );
}
