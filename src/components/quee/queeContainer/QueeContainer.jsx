import React, { useState, useEffect } from 'react';
import './css/queContainerMob.css';
import './css/queeContainer.css';
import QueeInstructions from './QueeInstructions';
import PeopleCardContainer from './PeopleCardContainer';
import QueeEntry from './QueeEntry'; // Importe o novo componente

export default function QueeContainer() {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/quee');
        const data = await response.json();
        setPeopleList(data);
        console.log('atualizou a fila');
      } catch (error) {
        console.error('Erro ao obter os dados do backend:', error);
      }
    };

    // Chame fetchData inicialmente
    fetchData();

    // Use setInterval para chamar fetchData a cada segundo
    const interval = setInterval(fetchData, 2000);

    // Retorne uma função de limpeza para limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // Coloque um array vazio para garantir que o useEffect seja executado apenas uma vez

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
      
      // Atualize a lista de pessoas após adicionar uma pessoa
      const updatedDataResponse = await fetch('http://localhost:3000/quee');
      const updatedData = await updatedDataResponse.json();
      setPeopleList(updatedData);
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
