import React from 'react';
import { textData } from '../assets/assets'; 

const Featurecard = () => {
  return (
    
    <div className="flex justify-center flex-wrap mt-[20px] gap-3">
      {textData.map((item, index) => (
        <div key={index} className="max-w-[400px] max-h-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 
                                hover:scale-110">
            <img className="w-full h-48 object-cover rounded-lg mb-4" src={item.image} alt='idk'/>
            <a href="https://lim-vithyea.github.io/Portfolio/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
            <a href="https://lim-vithyea.github.io/Portfolio/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Featurecard;
