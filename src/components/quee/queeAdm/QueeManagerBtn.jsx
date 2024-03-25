import React, { useState, useEffect } from 'react';

export default function QueeManagerBtn() {
  const [isQueeOpen, setIsQueeOpen] = useState(false); // Estado para controlar se a fila está aberta ou fechada

  useEffect(() => {
    // Busca o status da fila ao carregar o componente
    const fetchQueeStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/quee/status');
        const data = await response.json();
        setIsQueeOpen(data.status);
      } catch (error) {
        console.error('Erro ao obter o status da fila:', error);
      }
    };

    fetchQueeStatus(); // Chama a função para buscar o status da fila
  }, []);

  const handleQuee = async () => {
    const confirmCall = window.confirm(`Deseja ${isQueeOpen ? 'fechar' : 'abrir'} a fila?`);
    if (confirmCall) {
      try {
        const response = await fetch('http://localhost:3000/quee/open-close', {
          method: 'PATCH',
        });
        if (response.ok) {
          // Se a operação for bem-sucedida, atualiza o estado da fila
          setIsQueeOpen(!isQueeOpen);
          alert(`A fila foi ${isQueeOpen ? 'fechada' : 'aberta'} com sucesso!`);
          console.log(response);
        } else {
          throw new Error('Erro ao abrir/fechar a fila.');
        }
      } catch (error) {
        console.error('Erro ao abrir/fechar a fila:', error);
        alert('Erro ao abrir/fechar a fila. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className="quee-manager-btn">
      <button onClick={handleQuee}>{isQueeOpen ? 'Fechar Fila' : 'Abrir Fila'}</button>
    </div>
  );
}