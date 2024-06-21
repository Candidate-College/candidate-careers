import React from 'react';
import Image from 'next/image';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiFileCloudLine } from "react-icons/ri";

const PDFIcon = '/form/IconPdf.png';

interface CustomUploadButtonProps {
  type: 'photo' | 'file';
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview: string | null;
  fileType: string | null; 
}

const CustomUploadButton: React.FC<CustomUploadButtonProps> = ({ type, name, onChange, preview, fileType }) => {
  return (
    <div className="space-y-2">
      <label className="cursor-pointer bg-zinc-100 flex items-center justify-center w-32 h-32 border border-cyan-700 rounded-lg relative">
        {preview ? (
          type === 'photo' ? (
            <Image src={preview} alt="preview" layout="fill" objectFit="cover" className="rounded-lg" />
          ) : (
            fileType === 'application/pdf' ? (
              <Image src={PDFIcon} alt="PDF preview" width={100} height={100} />
            ) : (
              <RiFileCloudLine className="w-10 h-10 text-cyan-700" />
            )
          )
        ) : (
          type === 'photo' ? (
            <MdOutlineAddPhotoAlternate className="w-10 h-10 text-cyan-700" />
          ) : (
            <RiFileCloudLine className="w-10 h-10 text-cyan-700" />
          )
        )}
        <input type="file" name={name} className="hidden" onChange={onChange} />
      </label>
    </div>
  );
};

export default CustomUploadButton;
