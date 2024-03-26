// Administration.js
import React from 'react';
import './css/administration.css';
import Header from '../../components/header/Header';
import QueeCall from '../../components/quee/queeAdm/QueeCall';
import QueeManagerBtn from '../../components/quee/queeAdm/QueeManagerBtn';
import QueeContainer from '../../components/quee/queeContainer/QueeContainer';
import InServiceClearBtn from '../../components/quee/queeAdm/InServiceClearBtn';


export default function Administration() {
  
 
  const handleCallNext = async () => {
    try {
      const response = await fetch('http://localhost:3000/quee/next', {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Próximo paciente foi chamado com sucesso!');
        console.log(response);
        // Atualize a lista de pessoas após chamar o próximo paciente com sucesso
        // Você pode optar por recarregar a página ou atualizar os dados diretamente, dependendo da sua preferência
      } else {
        throw new Error('Erro ao chamar próximo paciente');
      }
    } catch (error) {
      console.error('Erro ao chamar próximo paciente:', error);
      alert('Erro ao chamar próximo paciente. Por favor, tente novamente.');
    }
  };

  // const handleQuee = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/quee/open-close', {
  //       method: 'PATCH',
  //     });
  //     if (response.ok) {
  //       alert('A fila foi aberta!');
  //       console.log(response);
  //       // Atualize a lista de pessoas após chamar o próximo paciente com sucesso
  //       // Você pode optar por recarregar a página ou atualizar os dados diretamente, dependendo da sua preferência
  //     } else {
  //       throw new Error('Erro ao abrir a fila.');
  //     }
  //   } catch (error) {
  //     console.error('Erro ao abrir a fila:', error);
  //     alert('Erro ao abrir a fila. Por favor, tente novamente.');
  //   }
  // };


  return (
    
    <div>
      <Header />
      <QueeCall onCallNext={handleCallNext} />
      <QueeManagerBtn />
      <InServiceClearBtn />
      <QueeContainer />
    </div>
    
  );
}
