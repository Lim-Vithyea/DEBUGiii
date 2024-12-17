import React from 'react';
import Me from "../assets/Vithyea.jpg";


const Card = () => {
  return (
    <div className='flex justify-center mt-[30px]'>
<div className="w-full max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10 mt-[10px]">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Me}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Lim Vithyea</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Developer</span>
        <div className="flex mt-4 md:mt-6">
            <a href="https://lim-vithyea.github.io/Portfolio/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reach me</a>
        </div>
    </div>
</div>
</div>

  )
}

export default Card
