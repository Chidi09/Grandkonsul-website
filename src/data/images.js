// Import all your images here
import logo from '../grandkonsul-images/logo.png';
import logoWords from '../grandkonsul-images/logo_with_words-removebg-preview.png';

// Hero & Backgrounds
import heroBg from '../grandkonsul-images/Moody Modern Architecture.jpg';
import luxuryInterior from '../grandkonsul-images/Luxury Dark Interior.jpg';
import velvetSofa from '../grandkonsul-images/Green Velvet Sofa Dark Marble Wall.jpg';

// Services
import development from '../grandkonsul-images/Architect looking at blueprints construction site.jpg';
import relocation from '../grandkonsul-images/Unpacking boxes luxury living room.jpg';
import coLiving from '../grandkonsul-images/Co-living space.jpg';
import meeting from '../grandkonsul-images/Business meeting glass office.jpg';
import handshake from '../grandkonsul-images/Handshake close up dark suit.jpg';

// Projects
import villaPool from '../grandkonsul-images/White modern villa pool dusk.jpg';
import brutalist from '../grandkonsul-images/Brutalist architecture house.jpg';
import geometric from '../grandkonsul-images/Concrete geometric house.jpg';
import skyscraper from '../grandkonsul-images/Glass skyscraper looking up.jpg';
import apartment from '../grandkonsul-images/Modern apartment interior.jpg';
import officeFacade from '../grandkonsul-images/Modern office building facade.jpg';

export const assets = {
  logo,
  logoWords,
  heroBg,
  luxuryInterior,
  velvetSofa,
  services: {
    development,
    relocation,
    coLiving,
    meeting,
    handshake
  },
  projects: [
    { src: villaPool, title: "Villa Aurora", loc: "Lekki Phase 1" },
    { src: geometric, title: "The Cube", loc: "Victoria Island" },
    { src: skyscraper, title: "Akanksha Towers", loc: "Eko Atlantic" },
    { src: brutalist, title: "Raw Concrete", loc: "Abuja" },
    { src: apartment, title: "Luxe Haven", loc: "Ikoyi" },
    { src: officeFacade, title: "Grand HQ", loc: "Banana Island" }
  ]
};

