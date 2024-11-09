import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return (
    <div className="container">
      <h1>About Page</h1>
      <p>Informações sobre o site.</p>
      <button onClick={goToHome}>Voltar para Home</button>
    </div>
  );
}

export default About;
