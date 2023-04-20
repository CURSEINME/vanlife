import React from "react";
import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";

import { getHostVan } from "../../../../api";
import { generateClass } from "../../../../utils";
import { requireAuth } from "../../../../utils";

import "./style.css";

export async function loader({params, request}) {
  await requireAuth(request)
  return getHostVan(params.id)
}

export default function HostVansDetail() {

  const hostVansDetailData = useLoaderData()

  return (
    <div className="van-detail-container">
      <Link className="back" to=".." relative="path">Back to all vans</Link>
      <div className="van-detail-content">
        <div className="van-detail-main">
          <img src={hostVansDetailData.imageUrl}></img>
          <div className="van-detail-info">
            <div className={`type ${generateClass(hostVansDetailData)}`}>{hostVansDetailData.type}</div>
            <div className="van-detail-title">{hostVansDetailData.name}</div>
            <div className="van-detail-price">
              <span>{`$${hostVansDetailData.price}`}</span>
              <span>/day</span>
            </div>
          </div>
        </div>
        <nav className="van-detail-nav">
          <NavLink
            end 
            className={({isActive}) => isActive ? "host-active-link" : "host-link"}
            to=".">Details</NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "host-active-link" : "host-link"}
            to="pricing">Pricing</NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "host-active-link" : "host-link"}
            to="photos">Photos</NavLink>
        </nav>
        <Outlet context={[hostVansDetailData]}/>
      </div>
    </div>
  )
}