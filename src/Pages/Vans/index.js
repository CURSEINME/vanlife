import React, { Suspense } from "react"
import 
{ Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await
} from "react-router-dom"

import "./style.css"

import { generateClass } from "../../utils"
import { getVans } from "../../api"

export function loader() {
  return defer({ vans: getVans() })
}

export default function Vans() {

  const cardsPromiseData = useLoaderData()
  const [searchParams, setSearchParams]  = useSearchParams()


  const typeFilter = searchParams.get("type")

  function renderVansElements(cardsData) {

    const displayedCards = typeFilter
    ? cardsData.filter(item => item.type === typeFilter)
    : cardsData

    const cards = displayedCards.map(item => {
      return (
        <div key={item.id} className="card">
          <Link
            to={item.id}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter
            }}
          >
            <img src={item.imageUrl}></img>
            <div className="card-row">
              <h3>{item.name}</h3>
              <div className="card-price">
                <div className="price">{`$${item.price}`}</div>
                <div>/day</div>
              </div>
            </div>
            <div className={`type ${generateClass(item)}`}>{item.type}</div>
          </Link>
        </div>
      )
    })
    return (
      <>
        <div className="vans-filter-container">
          <button
            onClick={() => setSearchParams({type: "simple"})}
            className={`type simple ${typeFilter === "simple" ? "selected" : null }`}>
            Simple
          </button>
          <button
            onClick={() => setSearchParams({type: "rugged"})}
            className={`type rugged ${typeFilter === "rugged" ? "selected" : null }`}>
            Rugged
          </button>
          <button
            onClick={() => setSearchParams({type: "luxury"})}
            className={`type luxury ${typeFilter === "luxury" ? "selected" : null }`}>
            Luxury
            </button>
          {typeFilter && 
          <button
            onClick={() => setSearchParams({})}
            className="type clear-filters" >
            Clear filters
          </button>}
        </div>
        <div className="cards-container">{cards}</div>
      </>
    )
  }

  return (
    <div className="vans-container">
      <h1 className="vans-title">Explore our van options</h1>
      <Suspense fallback={<h2 className="vans-loading" >Loading vans...</h2>}>
        <Await resolve={cardsPromiseData.vans} >
          {renderVansElements}
        </Await>
      </Suspense>
    </div>
  )
}