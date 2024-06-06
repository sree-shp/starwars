// Importing useState hook from React and styles
import { useState } from "react";
import "./Filters.css";

// Filters component
function Filters({ planets, setFilteredPlanets, handleFiltersActive }) {
  // State variables to manage population, climate, and terrain filters
  const [population, setPopulation] = useState("");
  const [climate, setClimate] = useState([]);
  const [terrain, setTerrain] = useState([]);

  // Function to handle population change
  const handlePopulationChange = (e) => {
    setPopulation(e.target.value);
  };

  // Function to handle climate change
  const handleClimateChange = (e) => {
    const { value, checked } = e.target;
    setClimate((prevState) =>
      checked ? [...prevState, value] : prevState.filter((c) => c !== value)
    );
  };

  // Function to handle terrain change
  const handleTerrainChange = (e) => {
    const { value, checked } = e.target;
    setTerrain((prevState) =>
      checked ? [...prevState, value] : prevState.filter((t) => t !== value)
    );
  };

  // Function to reset filters
  function handleFiltersReset() {
    setFilteredPlanets([]);
    handleFiltersActive();
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredPlanets([]);

    let filteredResults = [];

    // Filtering based on climate or terrain
    if (climate.length > 0 || terrain.length > 0) {
      filteredResults = [
        ...filteredResults,
        ...planets.filter((planet) => {
          const planetClimates = planet.climate
            .split(",")
            .map((el) => el.trim());
          const planetTerrains = planet.terrain
            .split(",")
            .map((el) => el.trim());
          const hasMatchingClimate = climate.some((el) =>
            planetClimates.includes(el)
          );
          const hasMatchingTerrain = terrain.some((el) =>
            planetTerrains.includes(el)
          );
          return hasMatchingClimate || hasMatchingTerrain;
        }),
      ];
    }

    // Filtering based on population
    if (population) {
      filteredResults = [
        ...filteredResults,
        ...planets.filter((planet) => {
          if (population === "low") {
            return planet.population < 200000;
          } else if (population === "medium") {
            return planet.population > 200000 && planet.population < 10000000;
          } else {
            return planet.population > 10000000;
          }
        }),
      ];
    }

    // Setting filtered planets and handling filter activation
    setFilteredPlanets(filteredResults);
    handleFiltersActive();
  };

  // JSX to render filter options
  return (
    <div className="search-filters">
      <div className="filter-section">
        <div className="filters-header">
          <h1 className="">Filters</h1>
          <h1 className="" onClick={handleFiltersActive}>
            &times;
          </h1>
        </div>
        <div>
          {/* Form for filters */}
          <form onSubmit={handleSubmit} className="filters-body">
            {/* Population filter */}
            <div className="population-filter">
              <h3>Population</h3>
              <label>
                <input
                  type="radio"
                  value="low"
                  checked={population === "low"}
                  onChange={handlePopulationChange}
                />
                Low
              </label>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={population === "medium"}
                  onChange={handlePopulationChange}
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  value="high"
                  checked={population === "high"}
                  onChange={handlePopulationChange}
                />
                High
              </label>
            </div>
            {/* Climate filter */}
            <div className="climate-filter">
              <h3>Climate</h3>
              <label>
                <input
                  type="checkbox"
                  value="frozen"
                  checked={climate.includes("frozen")}
                  onChange={handleClimateChange}
                />
                Frozen
              </label>
              <label>
                <input
                  type="checkbox"
                  value="arid"
                  checked={climate.includes("arid")}
                  onChange={handleClimateChange}
                />
                Arid
              </label>
              <label>
                <input
                  type="checkbox"
                  value="temperate"
                  checked={climate.includes("temperate")}
                  onChange={handleClimateChange}
                />
                Temperate
              </label>
            </div>
            {/* Terrain filter */}
            <div className="terrain-filter">
              <h3>Terrain</h3>
              <label>
                <input
                  type="checkbox"
                  value="mountains"
                  checked={terrain.includes("mountains")}
                  onChange={handleTerrainChange}
                />
                Mountains
              </label>
              <label>
                <input
                  type="checkbox"
                  value="ocean"
                  checked={terrain.includes("ocean")}
                  onChange={handleTerrainChange}
                />
                Ocean
              </label>
              <label>
                <input
                  type="checkbox"
                  value="forests"
                  checked={terrain.includes("forests")}
                  onChange={handleTerrainChange}
                />
                Forests
              </label>
            </div>
            {/* Button container */}
            <div className="btn-container">
              <button
                type="button"
                className="reset-btn"
                onClick={handleFiltersReset}
              >
                Reset
              </button>
              <button type="submit" className="apply-btn">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exporting the Filters component
export default Filters;
