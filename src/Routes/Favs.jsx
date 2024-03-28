import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextProvider();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavorites(favs);
  }, []);

  return (
    <>
      <div
        className={`min-h-screen ${
          state.darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <Navbar />
        <h1
          className={`text-center text-3xl font-bold my-20 ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Dentistas Favoritos
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 mb-20">
          {favorites.length > 0 ? (
            favorites.map((dentist) => (
              <div
                key={dentist.id}
                className={`w-[350px] sm:w-[400px] md:w-[600px] flex gap-2 sm:gap-5 rounded-lg bg-gray-100 border ${
                  state.darkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-gray-50 border-gray-200'
                } `}
              >
                <img
                  className="w-[150px] rounded-l-md"
                  src="/images/doctor.jpg"
                  alt="foto del doctor"
                />
                <div className="p-4">
                  <h2
                    className={`font-medium text-lg ${
                      state.darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    {dentist.name}
                  </h2>
                  <p
                    className={`text-sm sm:text-base my-5 ${
                      state.darkMode ? 'text-gray-300' : 'text-gray-700'
                    } `}
                  >
                    {dentist.company.name}
                  </p>
                  <p
                    className={`text-sm sm:text-base ${
                      state.darkMode ? 'text-gray-300' : 'text-gray-700'
                    } `}
                  >
                    {dentist.address.city}, {dentist.address.street},{' '}
                    {dentist.address.suite}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p
              className={`text-center text-lg ${
                state.darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Todavía no tienes dentistas favoritos. ¡Ve al Home y agrégalos!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favs;
