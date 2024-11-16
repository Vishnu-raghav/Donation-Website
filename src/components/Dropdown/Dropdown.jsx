
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ ngos }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId;


  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() =>{
      setIsDropdownOpen(false);
    },50)
  };

  return (
    <li 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Donate Button */}
      <button className="hover:text-yellow-300 font-semibold">
        Donate
      </button>

      {/* Show Menu when hovered over Donate button */}
      {isDropdownOpen && ngos && ngos.length > 0 && (
        <div 
          className="absolute bg-white text-black shadow-lg mt-2 py-4 px-6 rounded-md w-64" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            {ngos.map((ngo) => (
              <li key={ngo.id} className="hover:bg-yellow-50 rounded-lg">
                <Link to={`/ngo/${ngo.$id}`} className="block px-2 py-3">
                  {ngo.Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
