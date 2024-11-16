
import React from 'react';
import NgoList from '../../components/NgoList/NgoList'; 
import HeroSlider from '../../components/HeroSlider/Slider'; 

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <HeroSlider/>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NgoList />
      </div>
    </div>
  );
};

export default HomePage;
