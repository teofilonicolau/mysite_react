import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return (
    <div className="container">
      <h1>Contact Page</h1>
      <p>Informações de contato.</p>
      <button onClick={goToHome}>Voltar para Home</button>
    </div>
  );
}

export default Contact;
