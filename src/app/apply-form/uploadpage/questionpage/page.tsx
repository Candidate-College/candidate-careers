"use client";

import React from 'react';
const backgroundImage = '/form/gradientform.jpg';
import QuestionForm from '@/components/form-te/QuestionForm';

export default function Question() {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <QuestionForm/>
      </div>
    );
  }

