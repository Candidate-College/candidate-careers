"use client";

import React from 'react';
import FinalForm from '@/components/form-te/FinalForm';
const backgroundImage = '/form/gradientform.jpg';

export default function Finalform() {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <FinalForm />
      </div>
    );
}