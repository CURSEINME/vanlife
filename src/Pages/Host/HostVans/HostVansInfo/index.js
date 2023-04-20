import { useOutletContext } from "react-router-dom";
import "./style.css";

function HostVansInfo() {

  const [vanData, setVanData] = useOutletContext()

  return (
    <div className="van-info-container">
      <div className="van-info-name">
        <span>Name: </span>
        <span>{vanData.name}</span>
      </div>
      <div className="van-info-category">
        <span>Category: </span>
        <span>{vanData.type}</span>
      </div>
      <div className="van-info-desc">
        <span>Description: </span>
        <span>{vanData.description}</span>
      </div>
      <div className="van-info-visability">
        <span>Visability: </span>
        <span>Public</span>
      </div>
    </div>
  )
}

export default HostVansInfo;