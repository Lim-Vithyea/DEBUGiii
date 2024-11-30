import React from 'react';

const Button = ({ name, color , border}) => {
  // Conditional class for background color based on the color prop
  const colorClasses = {
    blue: 'bg-[#3700FF] hover:bg-[#3700FF]',
    background: 'bg-[#080320]',
  };
  const borderClass ={
    border: 'border-2 border-[#3700FF]'
  }

  return (
    <div
      className={`w-52 h-12 flex items-center justify-center transform transition duration-500 hover:scale-110 rounded-xl font-bold cursor-pointer text-white ${colorClasses[color]||'bg-blue-500'} ${borderClass[border]}`}>
      {name}
    </div>
  );
};

export default Button;
