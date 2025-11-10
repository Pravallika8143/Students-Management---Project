import { Outlet } from "react-router-dom"
// import Students from "./features/students/StudentsTable"
import Navbar from "./components/Navbar"


function App() {
 return (
      <div className="border border-1 border-dark m-4 p-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
  )
}

export default App;