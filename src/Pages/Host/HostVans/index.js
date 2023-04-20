import React, { Suspense } from "react";

import 
{ Link,
  useLoaderData,
  Await,
  defer
 } from "react-router-dom";

import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";

import "./style.css";

export async function loader({request}) {

  await requireAuth(request)
  return defer({hostVansData: getHostVans()})
}

export default function HostVans() {

  const hostVansPromise = useLoaderData()

  function renderHostVans(hostVansData) {
    const vans = hostVansData.map(item => {
      return (
        <Link
          key={item.id}
          className="van"
          to={item.id}
        >
          
          <img src={item.imageUrl}/>
          <div className="van-main">
            <h3 className="van-title">{item.name}</h3>
            <div className="van-price">$60/day</div>
          </div>
        </Link>
      )
    })
    return (
      <div className="host-vans-items">{vans}</div>
    )
  }

  return (
    <div className="host-vans-container">
      <h1>Your listed vans</h1>
      <Suspense fallback={<h2 className="vans-loading" >Loading host vans...</h2>}>
        <Await resolve={hostVansPromise.hostVansData} >
          {renderHostVans}
        </Await>
      </Suspense>
    </div>
  )
}