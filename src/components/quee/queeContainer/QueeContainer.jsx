import React from 'react';
import './css/queContainerMob.css';
import './css/queeContainer.css';
import QueeInstructions from './QueeInstructions';

export default function QueeContainer() {
  const [peopleList, setPeopleList] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/quee')
      .then(response => response.json())
      .then(data => {
        setPeopleList(data);
      
      })
      .catch(error => {
        console.error('Erro ao obter os dados do backend:', error);
      });
  }, []);

  

  return (
    <div className='quee-container'>
      <QueeInstructions />
      <div className='people-card-container'>
      {peopleList.length === 0 ? (
          <p></p>
        ) : (
        peopleList.map(person => (
          <div className='people-card' key={person.id}>
            <p>Nome: {person.name}</p>
            {/* Adicione aqui os outros dados que deseja exibir */}
          </div>
        ))
        )}
      </div>
    </div>
  );
}
