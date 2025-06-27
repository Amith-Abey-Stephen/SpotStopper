
import './App.css'
import VehicleDetails from './component/Vehicle_details'
import Background from './component/Background'
import Dashboard from './component/DashboardHome'

function App() {
  return (
    <>
      <Background />
      <div className="flex items-center justify-center absolute inset-0 z-2">
      <VehicleDetails />
      <Dashboard />
      </div>
      </>
  )
}

export default App
