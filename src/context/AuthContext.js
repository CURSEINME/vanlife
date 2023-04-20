import { createContext, useState, useEffect} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"

export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })
  },[])

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}