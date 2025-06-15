import './App.css';
import Welcome from './component/welcome'; // ✅ Import the correct component
// import VehicleDetails from './component/Vehicle_details'; // ❌ Comment this out for now

function App() {
  return (
    <>
      <Welcome /> {/* ✅ This will show the Welcome UI */}
      {/* <VehicleDetails /> ← Optional: remove or comment out */}
    </>
  );
}

export default App;
