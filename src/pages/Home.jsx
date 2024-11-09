import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;
