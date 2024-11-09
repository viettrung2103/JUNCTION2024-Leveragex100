import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const BodyLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default BodyLayout