import React, { useState, useEffect } from 'react';
import './css/queContainerMob.css';
import './css/queeContainer.css';
import QueeInstructions from './QueeInstructions';
import PeopleCardContainer from './PeopleCardContainer';
import QueeEntry from './QueeEntry'; 
import { io } from 'socket.io-client';

export default function QueeContainer() {
  const [peopleList, setPeopleList] = useState([]);
  const [isQueeOpen, setIsQueeOpen] = useState(false)
  

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
  
  }, []); // Coloque um array vazio para garantir que o useEffect seja executado apenas uma vez
const socket = io('ws://localhost:3000');
// Listen para mensagens do WebSocket
socket.on('connect', function() {
  
socket.on('nextPatientCalled',async function() {
  try {
    const response = await fetch('http://localhost:3000/quee');
    const data = await response.json();
    setPeopleList(data);
    return socket.close
  } catch (error) {
    console.error('Erro ao obter os dados do backend:', error);
  }
    
  });

});

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
      { isQueeOpen ? <QueeEntry onAddPerson={addPersonToQueue} /> : <span>No momento a fila está fechada.</span>}
    </div>
  );
}
