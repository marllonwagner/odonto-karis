import React from 'react'

export default function InServiceClearBtn() {

  const handleInService = async () => {
    const confirmCall = window.confirm(`Deseja limpar o atendimento ?`);
    if (confirmCall) {
      try {
        const response = await fetch('http://localhost:3000/quee/in-service-clear', {
          method: 'DELETE',
        });
        if (response.ok) {
          // Se a operação for bem-sucedida, atualiza o estado da fila
        
          alert(`O atendimento foi limpo com sucesso!`);
         
        } else {
          throw new Error('Erro ao limpar o atendimento.');
        }
      } catch (error) {
        console.error('Erro ao limpar o atendimento:', error);
        alert('Erro ao limpar o atendimento. Por favor, tente novamente.');
      }
    }
  };


  return (
    <div>
      <button onClick={handleInService}>Limpar Atendimento</button>
    </div>
  )
}
