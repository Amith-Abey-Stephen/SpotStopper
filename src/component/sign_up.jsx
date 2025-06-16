import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    fullName: "",
  });

  const isFormComplete =
    formData.username.trim() && formData.phone.trim() && formData.fullName.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-900">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold text-black mb-1" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Sign Up</h2>
        <p className="text-xl font-medium text-black mb-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Step 1 of 2</p>
        <form className="w-full space-y-6">
          <div>
            <label className="block text-black font-semibold mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 text-black font-medium"
              style={{ fontFamily: 'Inter, Arial, sans-serif' }}
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Phone Number</label>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                background: "#f9fafb",
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: 500,
                color: '#111827',
                fontSize: '1rem',
              }}
              containerStyle={{ width: "100%" }}
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 text-black font-medium"
              style={{ fontFamily: 'Inter, Arial, sans-serif' }}
            />
          </div>
          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-full py-3 rounded-full text-white text-lg font-semibold mt-2 transition-all duration-200 ${
              isFormComplete
                ? "bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 shadow-md"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            style={{ fontFamily: 'Inter, Arial, sans-serif' }}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;