import React, { useState } from 'react';
import './css/queeInstructionsMob.css';
import './css/queeInstructions.css';

export default function QueeInstructions({socket}) {
  const [inService, setInservice ] = useState('Ninguém');

  const fetchData = async () => {
    
    try {
      const response = await fetch('http://localhost:3000/quee/in-service');
      const data = await response.json();
      if (data.length === 0) {
        setInservice('Ninguém');
      }else{
        setInservice(data.name)
      }
     
    } catch (error) {
      console.error('Erro ao obter os dados do backend:', error);
    }
  };

  fetchData();

  socket.on('toInService',async function() {
    try {
      const response = await fetch('http://localhost:3000/quee/in-service');
      const data = await response.json();
      if (data.length === 0) {
        setInservice('Ninguém');
      }else{
        setInservice(data.name)
        return socket.close
      }
       
    } catch (error) {
      console.error('Erro ao obter os dados do backend:', error);
    }
      
    });


  return (
    <div className='quee-instructions'>
      <div className='hist-inService-container'>
            <div className='inService-container'> <span>Em atendimento</span>: <span>{inService}</span> </div>
      </div>

      <div className='instructions-container'> 
        <span className='instructions'>atenção! esteja presente ao ser chamado, caso contrário será removido da fila.</span>
      </div>
     
    </div>
  );
}
