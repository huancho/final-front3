import React from 'react';
import { useContextProvider } from './utils/global.context';

const Footer = () => {
  const { state } = useContextProvider();
  return (
    <footer
      className={`flex justify-center sm:justify-between items-center bg-indigo-600 py-4 px-8 ${
        state.darkMode ? 'bg-indigo-800' : 'bg-indigo-600'
      }`}
    >
      <img src="/images/DH.png" alt="DH-logo" className="w-[200px] hidden sm:block" />

      <div className="flex items-center gap-10 ">
        <li className="w-[30px] flex items-center">
          <img src="/images/ico-facebook.png" alt="" />
        </li>
        <li className="w-[30px] flex items-center">
          <img src="/images/ico-instagram.png" alt="" />
        </li>
        <li className="w-[30px] flex items-center">
          <img src="/images/ico-tiktok.png" alt="" />
        </li>
        <li className="w-[30px] flex items-center">
          <img src="/images/ico-whatsapp.png" alt="" />
        </li>
      </div>
    </footer>
  );
};

export default Footer;
