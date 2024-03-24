// QueeCall.js
import React from 'react';

export default function QueeCall({ onCallNext }) {

  const handleCallNext = () => {
    const confirmCall = window.confirm('Deseja chamar o próximo paciente da fila?');
    if (confirmCall) {
      onCallNext(); // Chama a função para chamar o próximo paciente
    }
  };

  return (
    <div className="quee-call">
      <button onClick={handleCallNext}>Chamar Próximo Paciente</button>
   
    </div>
  );
}
