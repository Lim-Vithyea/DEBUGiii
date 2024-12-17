import React from 'react';

const Button = ({ name, color, border, shadow }) => {
  const colorClasses = {
    blue: 'bg-[#3700FF] hover:bg-[#3700FF]',
    background: 'bg-[#080320]',
  };
  const borderClass = {
    border: 'border-2 border-[#3700FF]'
  }
  const shadowClass = {
    shadow: 'shadow-[0px_0px_100px_0px_rgba(59,_130,_246,_0.5)]'
  }
  return (
    <div
      className={`w-52 h-12 flex items-center justify-center transform transition 
      duration-500 hover:scale-110 rounded-xl font-bold cursor-pointer text-white ${colorClasses[color]||'bg-blue-500'} ${borderClass[border]} ${shadowClass[shadow]}`}>
      {name}
    </div>
  );
};

export default Button;
