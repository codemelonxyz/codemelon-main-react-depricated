import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FormWizard } from '../components/FormWizard';

const questions = [
  {
    id: 1,
    question: "What's your name?",
    placeholder: "Vaiditya Tanwar",
    type: "text",
    required: true, // Added required property
  },
  {
    id: 2,
    question: "What's your email?",
    placeholder: "vaidityatanwar2207@gmail.com",
    type: "email",
    required: true, // Added required property
  },
  {
    id: 3,
    question: "How can we help you?",
    placeholder: "Tell us about your inquiry...",
    type: "textarea",
    required: false, // Added required property
  }
];

function ContactUs() {
  const handleFormSubmit = (answers) => {
    console.log('Form submitted:', answers);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full flex items-center justify-center">
        <FormWizard
          questions={questions}
          onSubmit={handleFormSubmit}
        />
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;