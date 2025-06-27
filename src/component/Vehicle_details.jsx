
const vehicleTypes = [
    { value: "", text: "Select vehicle type" },
    { value: "car", text: "Car" },
    { value: "motorcycle", text: "Motorcycle" },
    { value: "truck", text: "Truck" },
    { value: "bus", text: "Bus" },
  ];

function VehicleDetails() {
  return (
    <form className="bg-white p-8 mx-4 sm:w-1/3 rounded-2xl" >
      <div className="mb-5 flex flex-col justify-center items-center py-4">
        <h1 className="text-2xl font-bold">Vehicle Details</h1>
        <p className="text-xl font-semibold">Step 2 of  2</p>
      </div>
        <div className="mb-5">
            <label htmlFor="vehicle_color" className="block mb-2 text-sm font-medium text-gray-700 ">Vehicle Color</label>
            <input type="text" id="vehicle_color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter vehicle color" required />
        </div>
        <div className="mb-5">
          <label htmlFor="vehicle_type" className="block mb-2 text-sm font-medium text-black">Vehicle Type</label>
          <select id="vehicle_type" name="vehicle_type" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            {vehicleTypes.map(
              (vehicle) => (
                <option key={vehicle.value} value={vehicle.value}>
                  {vehicle.text}
                </option>
              ))
            }
          </select>
        </div>

        <div className="mb-5">
            <label htmlFor="plate_number" className="block mb-2 text-sm font-medium text-black ">Plate Number</label>
            <input type="text" id="plate_number" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>

        <div className="flex justify-center items-center"> 
        <button type="submit" style={{ background: "linear-gradient(279.82deg, #111111 39%, #2B2B2B 61%)"}} className="text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-3/4 px-8 py-2.5 text-center" >
          Confirm
        </button>

        </div>
    </form>
  );
}

export default VehicleDetails;


