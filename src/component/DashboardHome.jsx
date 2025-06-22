import { useState, useEffect } from "react";

function Dashboard() {
  const [plateNumber, setPlateNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setCheckInTime(getCurrentTime());
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setCheckInTime("");
  };

  useEffect(() => {
    setUserName("John Doe");
  }, []);

  return (
    <div className="w-full max-w-[768px] mx-auto px-4 py-6 flex flex-col gap-6">
  
      <div className="bg-white rounded-xl shadow-md px-4 py-3 flex justify-between items-center">
        <h2 className="font-bold text-lg">Dashboard</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="bg-white rounded-xl shadow p-4 sm:row-span-2">
    <p className="text-sm text-gray-600 font-semibold mb-3">Your Vehicle Details</p>
    <div className="mb-3">
      <p className="text-sm text-gray-600">Toyota Camry</p>
      <p className="text-sm text-gray-800">License Plate: ABC-1234</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Honda CB600F</p>
      <p className="text-sm text-gray-800">License Plate: ABC-1234</p>
    </div>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-600 mb-1">Status</p>
      <p className={`font-medium ${isCheckedIn ? "text-green-600" : "text-red-600"}`}>
        {isCheckedIn ? "Checked In" : "Checked Out"}
      </p>
    </div>
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-600 mb-1">Checked in at</p>
      <p className="font-medium text-blue-600">{checkInTime || "-- : --"}</p>
    </div>
  </div>
</div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleCheckOut}
          className="bg-white border border-gray-400 text-black font-semibold px-8 py-2 rounded-full shadow"
        >
          Check Out
        </button>
        <button
          onClick={handleCheckIn}
          className="bg-black text-white font-semibold px-8 py-2 rounded-full shadow"
        >
          Check In
        </button>
      </div>
      <div className="flex items-center bg-white rounded-full shadow-inner px-4 py-2 border border-gray-300 w-full max-w-xl mx-auto mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Enter Plate Number"
          className="w-full text-sm outline-none bg-transparent"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
