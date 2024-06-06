// Importing required modules and styles
import "./Card.css";
import { motion } from "framer-motion";

// Creating a number formatter
let formatter = Intl.NumberFormat("en", { notation: "compact" });

// Card component
function Card({ name, climate, terrain, population, img }) {
  // Function to capitalize the first letter of a string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // JSX for rendering the Card component
  return (
    <>
      <motion.div
        // Framer Motion animation properties
        initial={{ opacity: 0 }} // Initial animation state
        whileInView={{ opacity: 1 }} // Animation state when the component is in view
        transition={{ duration: 0.5 }} // Animation duration
        amount="some" // Additional animation property
        className="card" // CSS class for styling
      >
        {/* Planet name */}
        <h1 className="card-heading">{name.toUpperCase()}</h1>
        {/* Planet details */}
        <div className="card-details">
          {/* Population details */}
          <div className="population-wrapper">
            <span className="population-heading">Population</span>
            <span className="population-details">
              {/* Format population using the formatter */}
              {formatter.format(population)}
            </span>
          </div>
          {/* Climate details */}
          <div className="climate-wrapper">
            <span className="climate-heading">Climate</span>
            <span className="climate-details">{capitalize(climate)}</span>
          </div>
          {/* Terrain details */}
          <div className="terrain-wrapper">
            <span className="terrain-heading">Terrain</span>
            <span className="terrain-details">{capitalize(terrain)}</span>
          </div>
        </div>
        {/* Planet image */}
        <img className="planet-image" src={img} alt="planet" />
      </motion.div>
    </>
  );
}

// Exporting the Card component
export default Card;
