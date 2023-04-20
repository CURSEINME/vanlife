import { Link } from "react-router-dom";

import "./style.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <p>Sorry, the page you were looking for was not found.</p>
      <Link to="/">Back to home page</Link>
    </div>
  )
}

export default NotFound;