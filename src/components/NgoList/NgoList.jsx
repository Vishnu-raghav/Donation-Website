
import React, { useEffect, useState } from 'react';
import service from '../../appwrite/database';
import Card from '../Card/Card';
function NgoList() {
  const [ngo, setNgo] = useState([]);

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const ngos = await service.getAllNgo();
        if (Array.isArray(ngos)) {
          setNgo(ngos);
        } else {
          console.log('Unexpected data format', ngos);
        }
      } catch (error) {
        console.error('Error fetching NGOs:', error);
      }
    };
    fetchNgos();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 mr-11 ml-11 py-8 px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-2">Our NGOs</h2>
        <div className="text-center text-lg text-gray-500 mb-6">
          Create sustained impact. Support verified projects. Get regular updates. Save tax. Cancel anytime.
        </div>
        {ngo.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
            {ngo.map((ngoItem, index) => (
              <Card
                key={index}
                image={ngoItem.Image}
                name={ngoItem.Name}
                ngoItem={ngoItem}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No NGOs found</p>
        )}
      </div>
    </div>
  );
}

export default NgoList;