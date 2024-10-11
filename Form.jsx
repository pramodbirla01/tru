import React, { useState } from 'react';
import { database } from '../../../firebaseConfig';
import { ref, set } from 'firebase/database';
import Modal from 'react-modal';

// Set the modal element to bind to the app element
Modal.setAppElement('#root'); // Make sure 'root' is the ID of your main app element

function Form() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const newContactRef = ref(database, 'contacts/' + Date.now());
      await set(newContactRef, {
        name: name,
        phone: phone,
        email: email,
      });

      console.log('Contact saved successfully!');
      setIsLoading(false); // Complete loading
      setIsModalOpen(true); // Open modal
      
      // Reset fields
      setName('');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Error saving contact: ', error);
      setIsLoading(false); // Stop loading if there's an error
    }
  };

  // Function to validate phone input
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ml-0 md:ml-20 w-screen md:w-[90%] bg-purple-800 rounded-t-3xl p-10 h-auto md:min-h-screen">
      <h1 className="text-3xl font-bold mb-20 text-gray-200">Get a Callback for Query</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md space-y-6">
        <label htmlFor="name" className="font-semibold text-xl text-gray-200">Enter Full Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 font-bold rounded-full w-full py-3 text-center border border-gray-300 focus:outline-none focus:border-blue-600"
          required
        />
        <label htmlFor="phone" className="font-semibold text-xl text-gray-200">Enter Mobile Number:</label>
        <input
          type="tel"
          placeholder="10 digit Mobile Number"
          value={phone}
          onChange={handlePhoneChange}
          className="p-2 font-bold rounded-full w-full py-3 text-center border border-gray-300 focus:outline-none focus:border-blue-600"
          required
          maxLength={10}
          pattern="\d{10}"
        />
        <label htmlFor="email" className="font-semibold text-xl text-gray-200">Enter Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 font-bold rounded-full w-full py-3 text-center border border-gray-300 focus:outline-none focus:border-blue-600"
          required
        />
        <button
          type="submit"
          className="bg-green-600 w-full text-white rounded-full px-20 py-3 transition-all duration-300 ease-in-out hover:border border-black hover:text-black hover:bg-orange-400"
        >
          {isLoading ? 'Submitting...' : 'Get a Call'}
        </button>
      </form>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg max-w-sm mx-auto my-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-semibold mb-4">We will get back to you shortly!</h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-green-600 text-white rounded-full px-4 py-2 mt-4"
        >
          OK
        </button>
      </Modal>

      {/* Loader visual for network call */}
      {isLoading && <div className="text-white mt-4">Loading...</div>}
    </div>
  );
}

export default Form;
