import React, { useState } from 'react';
import './css/queeInstructionsMob.css';
import './css/queeInstructions.css';

export default function QueeInstructions() {
  const [inService, setInservice ] = useState('Ninguém');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/quee/in-service');
      const data = await response.json();
      
      setInservice(data.name);
     
    } catch (error) {
      console.error('Erro ao obter os dados do backend:', error);
    }
  };

  fetchData();

  return (
    <div className='quee-instructions'>
      <div> Em atendimento/Último atendimento : </div>
      <span>{inService}</span>
    </div>
  );
}
