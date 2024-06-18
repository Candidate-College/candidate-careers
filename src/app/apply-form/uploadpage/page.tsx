"use client";

import React from 'react';
import UploadForm from '@/components/form-te/UploadForm';

const backgroundImage = '/form/gradientform.jpg';

export default function Upload() {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <UploadForm/>
      </div>
    );
  }
  