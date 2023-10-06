import React, { useState } from 'react';
import Flower from '../../components/Sprite/Flower';

const Index = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleTranslateUp = () => {
    setTranslateY(translateY + 100);
  };

  return (
    <div className='flex flex-col justify-center items-center font-bold'>
      <button
        onClick={handleTranslateUp}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Translate Up
      </button>
      <div
        className="transition-transform transform translate-y-[-10px]"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <Flower />
      </div>
    </div>
  );
};

export default Index;
