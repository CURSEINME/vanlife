import { useRouteError } from "react-router-dom"

import "./style.css";

export default function Error() { 

  const error = useRouteError()

  return (
    <div className="error-container">
      <p>{`Error: ${error.message}`}</p>
      <p>{`Status: ${error.status}`}</p>
    </div>
  )
}