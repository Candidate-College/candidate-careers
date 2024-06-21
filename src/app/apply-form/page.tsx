"use client";

import React from 'react';
import CandidateForm from '@/components/form-te/CandidateForm';
const backgroundImage = '/form/gradientform.jpg';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <CandidateForm />
    </div>
  );
}
