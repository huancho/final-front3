import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextProvider();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favs')) || []
  );

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={`${state.darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <div className="my-20">
        <h1
          className={`text-center text-3xl font-bold ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Nuestros Dentistas
        </h1>
        <div className="flex items-center justify-center my-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.data.map((dentist) => {
              return (
                <Card
                  key={dentist.id}
                  dentist={dentist}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
