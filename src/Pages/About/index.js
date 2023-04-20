import { Link } from "react-router-dom"
import "./style.css"

function About() {
  return (
    <div className="about-container">
      <img src="Images/about-bg.jpg"></img>
      <div className="about-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental.
          Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
          (Hitch costs extra 😉)
          <br/><br/>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="about-van">
          <h3>
            Your destination is waiting.<br/>
            Your van is ready.
          </h3>
          <Link to="/vans">Explore our vans</Link>
        </div>
      </div>
    </div>
  )
}

export default About