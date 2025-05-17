import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

const MyProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Profile updated successfully!'); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
     
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome{ name && `, ${name}` }!</h1>
        <p className="text-lg">This is your profile page</p>
      </div>

      {/* Profile Display Card */}
      <div className="max-w-md mx-auto mt-[-4rem]">
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
          <img
            src={previewUrl || 'https://via.placeholder.com/150'}
            alt="User"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white -mt-12 object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">{name || 'Your Name'}</h2>
          <p className="text-gray-600">{email || 'your email'}</p>
        </div>
      </div>

      {/* Form to update info */}
      <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Update Information</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Update Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Update Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;

