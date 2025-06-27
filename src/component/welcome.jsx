import React from 'react';

export default function Welcome() {
  return (
    <div className="w-screen min-h-screen bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/af37f9135b3a72dff881ed107e144e84e1b48924?placeholderIfAbsent=true')] bg-[#f0e6f6] bg-cover bg-center bg-no-repeat relative overflow-y-auto">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#f0e6f6]/70 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10 min-h-screen sm:justify-center sm:h-screen sm:py-0">
        <div className="flex flex-col items-center w-full">
          <div
            className="w-full max-w-[300px] rounded-[24px] p-[45px] text-center flex flex-col justify-between items-center shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{ backgroundColor: 'white' }}
          >
            {/* Header */}
            <header className="flex flex-col items-center">
              <div
                className="w-[48px] h-[48px] rounded-full"
                style={{ backgroundColor: '#d6d3d1' }}
              />
              <h1
                className="mt-[24px] text-[28px] font-semibold"
                style={{ color: '#000' }}
              >
                Welcome to Parkor
              </h1>
              <p
                className="mt-[14px] text-[16px] font-light"
                style={{ color: '#777' }}
              >
                Lorem ipsum
              </p>
            </header>

            {/* Image */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b292996768bcb91a521475cd41b8bc997c8f3937?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="w-[180px] h-[180px] object-contain my-[48px] mx-auto"
            />

            {/* Buttons */}
            <section className="w-full text-[20px] font-medium flex flex-col gap-[14px]">
              <button
                className="w-full h-[60px] rounded-full px-16 text-[18px] cursor-pointer flex items-center justify-center border-0"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                }}
              >
                Get Started
              </button>
              <button
                className="w-full h-[60px] rounded-full px-16 text-[18px] cursor-pointer flex items-center justify-center border"
                style={{
                  backgroundColor: 'transparent',
                  color: '#000',
                  borderColor: '#000',
                }}
              >
                Log In
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
