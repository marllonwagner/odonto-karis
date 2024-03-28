import React from 'react';
import './css/peopleCardContainer.css';

function PeopleCardContainer({ peopleList }) {
  const personName = localStorage.getItem('patientName')
  return (
    <div className='people-card-container'>
      {peopleList.length === 0 ? (
        <p></p>
      ) : (
        peopleList.map((person, index) => (
          <div className='people-card' key={person.id}>
          
            {/* <p className={`people-card ${index < 3 ? `position-${index + 1}` : ''}`}>{index + 1} {person.name}</p> */}
            <p className={`people-card ${personName === person.name ? `name-red` : ''}`}>{index + 1} {person.name}</p>
            {/* Adicione aqui os outros dados que deseja exibir */}
          </div>
        ))
      )}
    </div>
  );
}

export default PeopleCardContainer;
