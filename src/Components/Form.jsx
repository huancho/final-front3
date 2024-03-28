import React, { useState } from 'react';
import { useContextProvider } from './utils/global.context';

const Form = () => {
  const { state } = useContextProvider();
  const [submitData, setSubmitData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSubmitData({ ...submitData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    const { name, email } = submitData;
    if (!name || name.length < 6) {
      newErrors.name = 'Por favor, ingrese un nombre válido';
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regex.test(email)) {
      newErrors.email = 'Por favor, ingrese un email válido';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      console.log(submitData);
      setShowConfirm(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center border rounded-md shadow-xl w-[300px] h-[300px] px-8 ${
          state.darkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-gray-50 border-gray-200'
        } `}
      >
        <h4
          className={`text-center font-semibold mb-5 ${
            state.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Ingresa tus datos
        </h4>
        <label
          htmlFor="name"
          className={`text-sm ${
            state.darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className={`mt-1  border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg ${
            errors.name ? 'border-red-600' : ''
          } ${
            state.darkMode
              ? ' bg-gray-700 border-gray-600 text-white'
              : 'bg-gray-50 border-gray-300 text-gray-900'
          } `}
        />
        {errors.name && (
          <span className="text-red-600 text-xs mt-1">{errors.name}</span>
        )}

        <label
          htmlFor="email"
          className={`mt-5 text-sm ${
            state.darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          className={`mt-1  border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:shadow-lg ${
            errors.email ? 'border-red-600' : ''
          } ${
            state.darkMode
              ? ' bg-gray-700 border-gray-600 text-white'
              : 'bg-gray-50 border-gray-300 text-gray-900'
          } `}
        />
        {errors.email && (
          <span className="text-red-600 text-xs mt-1">{errors.email}</span>
        )}

        <button
          className={`mt-5 self-center w-32 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md px-6 font-medium ${
            state.darkMode ? 'bg-white text-black' : 'bg-black text-white'
          } `}
        >
          <span className="absolute h-0 w-0 rounded-full bg-green-500 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
          <span className="relative">Enviar</span>
        </button>
      </form>

      {showConfirm && (
        <h4
          className={`text-center text-base mt-20 animate-bounce ${
            state.darkMode ? 'text-white' : 'text-black'
          } `}
        >
          ¡Gracias {submitData.name}, te contactaremos cuanto antes vía mail!
        </h4>
      )}
    </div>
  );
};

export default Form;
