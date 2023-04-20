import { NavLink, Outlet } from "react-router-dom"
import "./style.css";

function HostLayout() {
  return (
    <div className="host-container">
      <nav className="host-nav">
        <NavLink
          end
          className={({isActive}) => isActive ? "host-active-link" : "host-link"}
          to="/host">Dashboard</NavLink>
        <NavLink
          className={({isActive}) => isActive ? "host-active-link" : "host-link"}
          to="/host/income">Income</NavLink>
        <NavLink
          className={({isActive}) => isActive ? "host-active-link" : "host-link"}
          to="/host/vans">Vans</NavLink>
        <NavLink
          className={({isActive}) => isActive ? "host-active-link" : "host-link"}
          to="/host/reviews">Reviews</NavLink>
      </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout;