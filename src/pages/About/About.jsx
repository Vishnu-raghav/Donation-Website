import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Image at the Top */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/80/9e/97/809e97aee93ade0e91aa3248c3e6ef8f.jpg')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-extrabold">About Us</h1>
            <p className="mt-4 text-xl">Learn more about our mission, vision, and the team behind our charity efforts.</p>
          </div>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="max-w-3xl mx-auto space-y-12 px-6 py-12">
        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our mission is to provide essential resources, education, and healthcare to underserved communities worldwide. 
            We believe in making a meaningful difference in the lives of those in need.
          </p>
        </div>

        {/* Vision Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our vision is to create a world where everyone has access to basic human rights and opportunities to live a fulfilling life.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1: Vishnu Raghav */}
            <a
              href="https://www.linkedin.com/in/vishnu-raghav-093017261/"  // Replace with actual LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src="https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png"
                alt="Vishnu Raghav"
              />
              <h3 className="text-xl font-semibold text-gray-900">Vishnu Raghav</h3>
              <p className="text-lg text-gray-600">Founder & CEO</p>
            </a>

            {/* Team Member 2: Uttam */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Uttam" />
              <h3 className="text-xl font-semibold text-gray-900">Uttam</h3>
              <p className="text-lg text-gray-600">Head of Operations</p>
            </div>

            {/* Team Member 3: Vishal */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Vishal" />
              <h3 className="text-xl font-semibold text-gray-900">Vishal</h3>
              <p className="text-lg text-gray-600">Community Outreach</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutUsPage;
