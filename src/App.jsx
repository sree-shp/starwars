// Importing necessary dependencies from React and other files
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./components/Loading";
import Card from "./components/Card";
import Filters from "./components/Filters";
import generateRandomImage from "./utils/generateRandomImage";

function App() {
  // State variables to manage planets data, filtered planets, loading state, error state, and filter activation
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);

  // Function to generate planet card component
  function createPlanetsCard(planet, index) {
    return (
      <Card
        key={index}
        name={planet.name}
        climate={planet.climate}
        terrain={planet.terrain}
        population={planet.population}
        img={planet.image}
      />
    );
  }

  // Function to toggle filter activation state
  function handleFiltersActive() {
    setIsFilterActive((state) => !state);
  }

  // Fetching planets data from API on component mount
  useEffect(() => {
    async function fetchPlanets() {
      try {
        setPlanets([]); // Clearing previous planets data
        setLoading(true); // Setting loading state to true
        for (var i = 1; i <= 2; i++) {
          // Fetching data from two pages
          const res = await axios.get(
            `https://swapi.dev/api/planets/?page=${i}`
          ); // Fetching data from API
          setPlanets((state) => [...state, ...res.data.results]); // Updating planets data state
        }
        // Generating random image URLs for each planet
        setPlanets((state) =>
          state.map((planet) => {
            const image = generateRandomImage();
            planet.image = image;
            return planet;
          })
        );
        setLoading(false); // Setting loading state to false after data fetch
      } catch (err) {
        setLoading(false); // Setting loading state to false in case of error
        setError(true); // Setting error state to true
        console.error(err.message); // Logging error message to console
      }
    }
    fetchPlanets(); // Calling fetchPlanets function
  }, []); // Running the effect only on component mount

  // JSX to render UI components
  return (
    <>
      {/* Display loading spinner when data is being fetched */}
      {loading && <Loading />}
      {/* Display error message if there is an error */}
      {error && "Error"}
      {/* Render UI when data is loaded and there is no error */}
      {!loading && !error && (
        <div className="home">
          <div>
            <h1 className="app-heading">Starwars</h1>
          </div>
          {/* Render heading with count of planets found */}
          <div className="heading">
            <h3>
              {filteredPlanets.length > 0
                ? filteredPlanets.length
                : planets.length}{" "}
              Planets Found
            </h3>
            {/* Render filter icon and Filters component when filter is activated */}
            <div className="filter-container">
              <img
                src="/filter.png"
                alt=""
                className="filter-icon"
                onClick={handleFiltersActive}
              />
              {isFilterActive && (
                <Filters
                  planets={planets}
                  filteredPlanets={filteredPlanets}
                  setFilteredPlanets={setFilteredPlanets}
                  handleFiltersActive={handleFiltersActive}
                />
              )}
            </div>
          </div>
          {/* Render planet cards */}
          <div className="planets-card-wrapper">
            {filteredPlanets.length > 0
              ? filteredPlanets.map(createPlanetsCard)
              : planets.map(createPlanetsCard)}
          </div>
        </div>
      )}
    </>
  );
}

export default App; // Exporting App component
