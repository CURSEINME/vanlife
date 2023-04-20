import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./style.css"
import AuthProvider from "../../context/AuthContext";

function Layout() {
  return(
    <AuthProvider>
      <div className="container">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default Layout