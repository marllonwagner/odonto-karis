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
        setInservice('Aristotles Silva Montenegro');
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
      
      <div className='instructions-container'> 

        
          <span className='atention'>Atenção !</span> 
          <span className='instructions'>
            Esteja presente ao ser chamado, caso contrário será removido da fila.
          </span>
        

      </div>
     
      <div className='inService-container'> 
        <span className='inService'>Em atendimento:</span> <span className='inServicePatient'>{ inService}</span> 
      </div>
     

    </div>
  );
}
