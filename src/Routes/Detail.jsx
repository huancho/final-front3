import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContextProvider();
  const [dentist, setDentist] = useState();
  const { id } = useParams();

  useState(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data))
      .catch((e) => console.error('Error fetching data: ', e));
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div
        className={`min-h-screen ${
          state.darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <Navbar />

        <h4
          className={`text-center text-lg font-medium mt-20 mb-4 ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Detalles del dentista:
        </h4>
        <h2
          className={`text-center text-3xl font-medium mb-6 ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          {dentist?.name}
        </h2>

        <div className="flex items-center justify-center p-10">
          <div
            className={`flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-3xl ${
              state.darkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            } `}
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 w-auto md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src="/images/doctor.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal ml-5">
              <h3
                className={`mb-2 text-2xl font-bold tracking-tight ${
                  state.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                {dentist?.username}
              </h3>
              <p
                className={`${
                  state.darkMode ? 'text-gray-200' : 'text-gray-900'
                }`}
              >
                ¿Listo para una sonrisa deslumbrante? Contáctanos por cualquiera
                de los siguientes canales. ¡Estamos aquí para cuidar de ti!
              </p>
              <h5
                className={`text-lg font-medium mt-5 ${
                  state.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                Email
              </h5>
              <p
                className={`${
                  state.darkMode ? 'text-gray-200' : 'text-gray-900'
                }`}
              >
                {dentist?.email}
              </p>
              <h5
                className={`text-lg font-medium mt-5 ${
                  state.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                Teléfono
              </h5>
              <p
                className={`${
                  state.darkMode ? 'text-gray-200' : 'text-gray-900'
                }`}
              >
                {dentist?.phone}
              </p>
              <h5
                className={`text-lg font-medium mt-5 ${
                  state.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                Sitio web
              </h5>
              <p
                className={`${
                  state.darkMode ? 'text-gray-200' : 'text-gray-900'
                }`}
              >
                {dentist?.website}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
