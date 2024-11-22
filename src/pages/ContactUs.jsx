import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FormWizard } from '../components/FormWizard/FormWizard';
import { ThemeContext } from '../ThemeContext';

const questions = [
  {
    id: 1,
    name: 'name',
    text: "What's your name?",
    type: 'text',
    placeholder: "Vaiditya Tanwar",
    required: true,
  },
  {
    id: 2,
    name: 'email',
    text: "What's your email?",
    type: 'email',
    placeholder: "vaidityatanwar2207@gmail.com",
    required: true,
  },
  {
    id: 3,
    name: 'inquiry',
    text: "How can we help you?",
    type: 'textarea',
    placeholder: "Tell us about your inquiry...",
    required: false,
  }
];


function ContactUs() {
  const theme = useContext(ThemeContext);
  const handleFormSubmit = (answers) => {
    console.log('Form submitted:', answers);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <main className="flex-grow w-full flex items-center justify-center"> */}
        <FormWizard
          questions={questions}
          onSubmit={handleFormSubmit}
          navFooter={true} // Hide the navigation footer
          theme={theme.theme}
        />
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default ContactUs;
