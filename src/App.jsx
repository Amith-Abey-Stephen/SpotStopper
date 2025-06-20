
import './App.css'
import Background from './component/Background'
import Welcome from './component/welcome';
import VehicleDetails from './component/Vehicle_details'
function App() {
  return (
    <>

      <Welcome />
      <Background />
      <div className="flex items-center justify-center absolute inset-0 z-2">
        <VehicleDetails />
      </div>
    </>
  )
}

export default App;
