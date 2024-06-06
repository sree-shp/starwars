// Importing planet images
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import planet3 from "../assets/planet3.png";
import planet4 from "../assets/planet4.png";
import planet5 from "../assets/planet5.png";
import planet6 from "../assets/planet6.png";
import planet7 from "../assets/planet7.png";
import planet8 from "../assets/planet8.png";

// Function to generate a random image URL
function generateRandomImage() {
  // Generate a random number between 1 and 8 (inclusive)
  const random = Math.floor(Math.random() * 8) + 1;

  // Select the corresponding planet image based on the random number
  let image;
  switch (random) {
    case 1:
      image = planet1;
      break;
    case 2:
      image = planet2;
      break;
    case 3:
      image = planet3;
      break;
    case 4:
      image = planet4;
      break;
    case 5:
      image = planet5;
      break;
    case 6:
      image = planet6;
      break;
    case 7:
      image = planet7;
      break;
    case 8:
      image = planet8;
      break;
    default:
      // Default case (should never be reached)
      image = planet1;
      break;
  }

  // Return the selected planet image URL
  return image;
}

// Exporting the generateRandomImage function
export default generateRandomImage;
