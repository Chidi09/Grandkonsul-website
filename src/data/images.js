// Import all your images here
import logo from '../grandkonsul-images/logo.png';
import logoWords from '../grandkonsul-images/logo_with_words-removebg-preview.png';

// Hero & Backgrounds
import heroBg from '../grandkonsul-images/Moody Modern Architecture.jpg';
import luxuryInterior from '../grandkonsul-images/Luxury Dark Interior.jpg';
import velvetSofa from '../grandkonsul-images/Green Velvet Sofa Dark Marble Wall.jpg';

// Services (The New Unique Images)
import development from '../grandkonsul-images/Construction crane sunset silhouette.jpg';
import relocation from '../grandkonsul-images/Business woman looking out hotel window.jpg';
import coLiving from '../grandkonsul-images/Modern university dorm interior.jpg';
import handshake from '../grandkonsul-images/Fountain pen signing contract.jpg';
// We use the existing meeting image or luxury interior if meeting is missing, 
// but based on your file list, I'll use the university dorm for HMO/CoLiving contexts.
import meeting from '../grandkonsul-images/Business meeting glass office.jpg';

// Projects
import villaPool from '../grandkonsul-images/White modern villa pool dusk.jpg';
import brutalist from '../grandkonsul-images/Brutalist architecture house.jpg';
import geometric from '../grandkonsul-images/Geometric concrete architecture.jpg';
import skyscraper from '../grandkonsul-images/Glass skyscraper looking up.jpg';
import apartment from '../grandkonsul-images/Modern apartment interior.jpg';
import abstractGlass from '../grandkonsul-images/Abstract glass architecture facade.jpg';

export const assets = {
  logo,
  logoWords,
  heroBg,
  luxuryInterior,
  velvetSofa,
  cubeHouse: geometric, // Exported so it can be used on Services page
  services: {
    development, // Construction Crane
    relocation,  // Business Woman
    coLiving,    // University Dorm (Good for HMO)
    meeting,     // Glass Office
    handshake    // Fountain Pen (Joint Venture)
  },
  projects: [
    { src: villaPool, title: "Villa Aurora", loc: "Lekki Phase 1" },
    { src: geometric, title: "The Cube House", loc: "Victoria Island" },
    { src: skyscraper, title: "Akanksha Complex", loc: "Abuja" },
    { src: brutalist, title: "Villa George", loc: "Ikoyi" },
    { src: apartment, title: "Contemporary Villa", loc: "Banana Island" },
    { src: abstractGlass, title: "Transparent Materials", loc: "Eko Atlantic" }
  ]
};

