import React from 'react';
import Form from '../Components/Form';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContextProvider();
  return (
    <div>
      <div
        className={`min-h-screen ${
          state.darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <Navbar />
        <h1
          className={`text-center text-3xl font-bold mt-20 ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          ¿Quieres saber más?
        </h1>
        <p className={`text-center font-semibold text-lg mt-4 mb-10 ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}>
          ¡Envíanos tus preguntas debajo y nos contactaremos contigo!
        </p>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
