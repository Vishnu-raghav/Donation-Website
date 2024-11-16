
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import service from '../../appwrite/database';

const NgoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const [ngoDetails, setNgoDetails] = useState(null);

  useEffect(() => {
    const fetchNgoDetails = async () => {
      try {
        const details = await service.getNgoById(id);
        setNgoDetails(details);
      } catch (error) {
        console.error("Error fetching NGO details", error);
      }
    };
    
    fetchNgoDetails();
  }, [id]);

  if (!ngoDetails) return <div className="text-center text-xl">Loading...</div>;

  
  const handleDonateClick = () => {
    navigate(`/donate/${id}`, { state: { donationLink: ngoDetails.donationlink } });
  };

  return (
    <div className="container mx-auto p-8">
      {/* Main Content Wrapper */}
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
        
        {/* Image Section */}
        <img 
          src={ngoDetails.Image} 
          alt={ngoDetails.Name} 
          className="w-full h-96 object-cover mb-8 rounded-t-lg"
        />
        
        {/* Content Section */}
        <div className="p-6 space-y-8">
          
          {/* NGO Name */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center animate__animated animate__fadeIn animate__delay-0.5s">
            {ngoDetails.Name}
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-4 animate__animated animate__fadeIn animate__delay-1s">
            {ngoDetails.Description}
          </p>

          {/* Objectives Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Objectives</h2>
            <p className="text-lg text-gray-600">{ngoDetails.Objectives}</p>
          </div>

          {/* Key Programs Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Programs</h2>
            <p className="text-lg text-gray-600">{ngoDetails.KeyProgram}</p>
          </div>

          {/* Success Stories Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Success Stories</h2>
            <p className="text-lg text-gray-600">{ngoDetails.SuccessStories}</p>
          </div>

          {/* How You Can Help Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">How You Can Help</h2>
            <p className="text-lg text-gray-600">{ngoDetails.HowYouCanHelp}</p>
          </div>

          {/* Donate Button Section */}
          <div className="mt-6 text-center">
            <button 
              onClick={handleDonateClick}
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoPage;
