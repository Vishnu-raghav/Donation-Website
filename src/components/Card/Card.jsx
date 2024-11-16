
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, name, ngoItem }) => {
  console.log(ngoItem); 
  return (
    <Link 
      to={`/ngo/${ngoItem.$id}`}
      className="group bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-full">
        <img
          src={image}
          alt={name || 'NGO Image'}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
      <Link 
       to={`/donate/${ngoItem.$id}`}
      >
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
        Donate
      </button>
      </Link>
    </Link>
  );
};

export default Card;

