import { Link } from 'react-router-dom';
import { useContextProvider } from './utils/global.context';

const Card = ({ dentist, favorites, setFavorites }) => {
  const { state } = useContextProvider();
  const { name, username, id } = dentist;

  const addFav = () => {
    const index = favorites.findIndex((fav) => fav.id === id);

    if (index === -1) {
      setFavorites([...favorites, dentist]);
    } else {
      setFavorites(favorites.filter((fav) => fav.id !== id));
    }
  };

  const fillColor = favorites.some((fav) => fav.id === id) ? 'red' : 'gray';

  return (
    <div
      className={`w-[280px] max-w-sm border rounded-lg shadow pt-10 ${
        state.darkMode
          ? 'bg-gray-800 border-gray-700'
          : 'bg-gray-50 border-gray-200'
      } `}
    >
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/images/doctor.jpg"
          alt="Bonnie image"
        />
        <h5
          className={`mb-1 text-xl font-medium text-gray-900 ${
            state.darkMode ? 'text-white' : 'text-black'
          } `}
        >
          {name}
        </h5>
        <span
          className={`text-sm  ${
            state.darkMode ? 'text-gray-300' : 'text-gray-500'
          } `}
        >
          {username}
        </span>
        <div className="flex mt-4 md:mt-6">
          <Link
            to={`/dentist/${id}`}
            className={`inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none ${
              state.darkMode
                ? 'bg-indigo-800 hover:bg-indigo-900'
                : 'bg-indigo-600 hover:bg-indigo-700'
            } `}
          >
            Detalles
          </Link>
          <button
            onClick={addFav}
            className={`py-2 px-2 ms-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border  ${
              state.darkMode
                ? 'bg-gray-300 border-gray-400 '
                : 'bg-white border-gray-200'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 hover:scale-110 tansition-all duration-300 ${
                fillColor === 'red' ? 'fill-red-700 text-red-700' : 'bg-transparent'
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
