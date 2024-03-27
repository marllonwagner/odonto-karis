import React, { useState, useEffect } from 'react';
import './css/queContainerMob.css';
import './css/queeContainer.css';
import QueeInstructions from './QueeInstructions';
import PeopleCardContainer from './PeopleCardContainer';
import QueeEntry from './QueeEntry'; 
import { io } from 'socket.io-client';
import QueeUperCover from '../queeUpperCover/QueeUperCover';

export default function QueeContainer() {
  const [peopleList, setPeopleList] = useState([]);
  const [isQueeOpen, setIsQueeOpen] = useState(false)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch('http://localhost:3000/quee'),
          fetch('http://localhost:3000/quee/status')
        ]);
  
        const data1 = await response1.json();
        const data2 = await response2.json();
  
        setPeopleList(data1);
        setIsQueeOpen(data2.status);
        
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

  socket.on('changeStatus',async function() {
    try {
      setIsQueeOpen(!isQueeOpen);
      return socket.close
    } catch (error) {
      console.error('Erro ao obter os dados do backend:', error);
    }
      
    });

    socket.on('addPersonToQuee',async function() {
      try {
        const updatedDataResponse = await fetch('http://localhost:3000/quee');
        const updatedData = await updatedDataResponse.json();
        setPeopleList(updatedData);
        return socket.close
      } catch (error) {
        console.error('Erro ao obter os dados do backend:', error);
      }
        
      });

});

  // Função para adicionar pessoa à fila
  const addPersonToQueue = async (person) => {
    try {
      await fetch('http://localhost:3000/quee/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
      });
      // await response.json();
      
      // Atualize a lista de pessoas após adicionar uma pessoa
      // const updatedDataResponse = await fetch('http://localhost:3000/quee');
      // const updatedData = await updatedDataResponse.json();
      // setPeopleList(updatedData);
    } catch (error) {
      console.error('Erro ao adicionar pessoa à fila:', error);
    }
  };

  return (
    <div className='quee-container'>
      <QueeUperCover />
      <QueeInstructions socket={socket}/>
      <PeopleCardContainer peopleList={peopleList} />
      {/* Renderize o componente QueeEntry e passe a função addPersonToQueue como prop */}
      { isQueeOpen ? <QueeEntry onAddPerson={addPersonToQueue} /> : <span>No momento a fila está fechada.</span>}
    </div>
  );
}
