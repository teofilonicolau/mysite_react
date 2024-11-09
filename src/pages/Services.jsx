import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return (
    <div className="container">
      <h1>Services Page</h1>
      <p>Lista de serviços oferecidos.</p>
      <button onClick={goToHome}>Voltar para Home</button>
    </div>
  );
}

export default Services;
