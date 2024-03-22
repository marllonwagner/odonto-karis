// QueeEntry.js

import React, { useState } from 'react';

function QueeEntry({ onAddPerson }) {
  const [documento, setDocumento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifique se o documento tem no máximo 11 caracteres
    if (documento.length <= 11) {
      // Chame a função de callback onAddPerson com o documento
      onAddPerson({ doc: documento });
      // Limpe o campo de entrada após o envio
      setDocumento('');
    } else {
      alert('O documento deve ter no máximo 11 caracteres');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
        placeholder="Digite o número do documento"
        maxLength={11} // Limite máximo de 11 caracteres
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default QueeEntry;
