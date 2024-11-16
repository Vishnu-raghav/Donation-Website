
import React, { useState } from 'react';
import PaypalBtn from '../../components/Paypal/PaypalBtn';

const DonatePage = () => {
  const [amount, setAmount] = useState('');

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Charity-related Paragraph at the top */}
      <div className="text-center text-white max-w-2xl w-full mb-8 px-4">
        <p className="text-2xl font-medium leading-relaxed">
          Your contribution can change lives. With your help, we can provide essential services like food, education, and healthcare to those who need it most.
        </p>
      </div>

      {/* Flex container for Image and Form side by side */}
      <div className="flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden space-x-6">
        
        {/* Image Section (left side) */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            height: '500px',
          }}
        ></div>

        {/* Donation Form Section (right side) */}
        <div className="w-1/2 p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Donate Now</h2>
            <p className="mt-2 text-sm text-gray-600">Enter the amount you wish to donate:</p>
          </div>

          {/* Donation Form */}
          <form className="space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  type="number"
                  value={amount}
                  onChange={handleInputChange}
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="overflow-y-auto max-h-96 mt-4">
              {/* Show PayPal button when amount is entered */}
              {amount && <PaypalBtn amount={amount} />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;





