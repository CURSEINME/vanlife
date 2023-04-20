import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { userSignOut } from "../../api";
import { requireAuth } from "../../utils";

import "./style.css"

export async function loader({request}) {
  await requireAuth(request)
  return null
}

export default function Profile() {

  const isLoggedIn = localStorage.getItem("loggedIn")


  
  const { currentUser } = useContext(AuthContext)
  
  async function signOut() {
    localStorage.removeItem("loggedIn")
    await userSignOut()
    window.location.reload()
  }

  return (
    <div className="profile-container">
      <div className="profile-main">
          <div className="profile-avatar">
            <img className="profile-img" src={currentUser?.photoURL} />
            <div className="profile-name">{currentUser?.displayName}</div>
          </div>
        <div className="profile-email">Email: {currentUser?.email}</div>
      </div>
      {isLoggedIn && <button className="profile-button" onClick={signOut}>Sign out</button>}
    </div>
  )
}