import React, { useState, useEffect } from 'react';
import './css/queContainerMob.css';
import './css/queeContainer.css';
import QueeInstructions from './QueeInstructions';
import PeopleCardContainer from './PeopleCardContainer';
import QueeEntry from './QueeEntry'; // Importe o novo componente

export default function QueeContainer() {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/quee')
      .then(response => response.json())
      .then(data => {
        setPeopleList(data);
      })
      .catch(error => {
        console.error('Erro ao obter os dados do backend:', error);
      });
  }, []);

  // Função para adicionar pessoa à fila
  const addPersonToQueue = async (person) => {
    try {
      const response = await fetch('http://localhost:3000/quee/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
      });
      await response.json();
     
      
      // Busque novamente a lista atualizada de pessoas do backend
      const updatedDataResponse = await fetch('http://localhost:3000/quee');
      const updatedData = await updatedDataResponse.json();
      setPeopleList(updatedData); // Atualize a lista de pessoas com os novos dados
    } catch (error) {
      console.error('Erro ao adicionar pessoa à fila:', error);
    }
  };

  return (
    <div className='quee-container'>
      <QueeInstructions />
      <PeopleCardContainer peopleList={peopleList} />
      {/* Renderize o componente QueeEntry e passe a função addPersonToQueue como prop */}
      <QueeEntry onAddPerson={addPersonToQueue} />
    </div>
  );
}
