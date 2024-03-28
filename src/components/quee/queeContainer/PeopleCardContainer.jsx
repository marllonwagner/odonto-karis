import React from 'react';
import './css/peopleCardContainer.css'

function PeopleCardContainer({ peopleList }) {
  return (
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
  );
}

export default PeopleCardContainer;
