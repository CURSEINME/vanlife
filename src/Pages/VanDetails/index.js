import React from "react";
import { useLocation, useLoaderData, Link } from "react-router-dom";
import { getVan } from "../../api";

import { generateClass } from "../../utils";

import "./style.css"

export function loader({params}) {
  return getVan(params.id)
}

export default function VanDetails() {

  const location = useLocation()
  const vanDetailData = useLoaderData()

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="detail-card">
      <Link to={`..${search}`} relative="path">
        <p className="back">{`Back to ${type} vans`}</p>
      </Link>
      <img src={vanDetailData.imageUrl}/>
      <div className={`type ${generateClass(vanDetailData)}`}>{vanDetailData.type}</div>
      <h1 className="detail-card-title">{vanDetailData.name}</h1>
      <div className="detail-card-price">
        <span>{`$${vanDetailData.price}`}</span>
        <span>/day</span>
      </div>
      <p className="detail-card-desc">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
      <button>Rent this van</button>
    </div>
  )
}