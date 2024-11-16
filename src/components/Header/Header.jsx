
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '../../appwrite/database';
import DropdownMenu from '../Dropdown/Dropdown'; 

const Header = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const ngosData = await service.getAllNgo(); 
        setNgos(ngosData); 
      } catch (error) {
        console.error('Error fetching NGOs:', error);
      }
    };

    fetchNgos(); 
  }, []);

  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img 
            src="https://via.placeholder.com/50" 
            alt="NGO Logo" 
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">Hope</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-yellow-300 font-semibold">Home</Link></li>
            {/* Donate Dropdown */}
            <DropdownMenu ngos={ngos} /> {/* Pass NGO data to DropdownMenu */}
            <li><Link to="/contact" className="hover:text-yellow-300 font-semibold">Contact</Link>
            </li>
            <li><Link to="/about" className="hover:text-yellow-300 font-semibold">About</Link></li>

          </ul>
        </nav>

        {/* Call to Action Button */}
        <div>
          <Link 
            to="/donate/${ngoItem.$id}" 
            className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
