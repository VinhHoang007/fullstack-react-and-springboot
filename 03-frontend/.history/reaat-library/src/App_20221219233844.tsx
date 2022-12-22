import React from 'react';
import './App.css';
import { Carousel } from './layouts/HomePage/components/Carousel';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </>

  );
}

export default App;
