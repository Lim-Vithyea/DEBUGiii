import React from 'react';
import { peopleData } from '../assets/assets';

const Card = () => {
  return (
    <div className="flex justify-center flex-wrap gap-6 mt-8">
      {peopleData.map((item, index) => (
        <div key={index} className="w-full max-w-[300px] h-[270px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 
                                hover:scale-110">
          <div className="flex flex-col items-center p-4">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.person} alt={`${item.name}`}/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{item.job}</span>
          </div>
          <div className="flex justify-center mt-4">
            <a href="https://lim-vithyea.github.io/Portfolio/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank" rel="noopener noreferrer">Reach me
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
