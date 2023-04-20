import { useOutletContext } from "react-router-dom";

import "./style.css";

function HostVansPricing() {

  const [vanData, setVanData] = useOutletContext()

  return (
     <div className="van-pricing-container">
        <span>{`$${vanData.price}`}</span>
        <span>/day</span>
     </div>
  )
}

export default HostVansPricing;