import { useOutletContext } from "react-router-dom";

import "./style.css";

function HostVansPhotos() {

  const [vanData, setVanData] = useOutletContext()

  return (
    <div className="van-photos-container">
      <img src={vanData.imageUrl}/>
    </div>
  )
}

export default HostVansPhotos;