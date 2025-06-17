
import './App.css'
import SignUp from "./component/sign_up";
import VehicleDetails from './component/Vehicle_details'
import Background from './component/Background'

function App() {
  return (
    <>
      <Background />
      <div className="flex items-center justify-center absolute inset-0 z-2">
        <SignUp />
        <VehicleDetails />
      </div>
    </>
  )

}

export default App;