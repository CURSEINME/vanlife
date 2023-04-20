import { Link, NavLink } from "react-router-dom";
import { useContext} from "react"

import "./style.css"
import { AuthContext } from "../../context/AuthContext";

function Header() {

  const { currentUser } = useContext(AuthContext)

  return (
    <header>
      <Link className="logo" to="/">#VANLIFE</Link>
      <nav>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null}
          to="host">Host
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null}
          to="about">About
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "active-link" : null}
          to="vans">Vans
        </NavLink>
        <NavLink to={currentUser ? "profile" : "login"}>
          <img src="/Images/login.svg" />
        </NavLink>
      </nav>
    </header>
  )
}

export default Header