import React from 'react';

const RegisterForm = ({ handleSubmit, patientFormData, addressFormData, orthoChecked, vipChecked, handlePatientChange, handleAddressChange, handleCheckboxChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Dados do Paciente</h2>
      <input type="text" name="name" value={patientFormData.name} onChange={handlePatientChange} placeholder="Nome" />
        <input type="number" name="age" value={patientFormData.age} onChange={handlePatientChange} placeholder="Idade" />
        <input type="text" name="cpf" value={patientFormData.cpf} onChange={handlePatientChange} placeholder="CPF" />
        <input type="text" name="rg" value={patientFormData.rg} onChange={handlePatientChange} placeholder="RG" />
        <input type="email" name="email" value={patientFormData.email} onChange={handlePatientChange} placeholder="E-mail" />
        <input type="text" name="phone1" value={patientFormData.phone1} onChange={handlePatientChange} placeholder="Telefone 1" />
        <input type="text" name="phone2" value={patientFormData.phone2} onChange={handlePatientChange} placeholder="Telefone 2" />
        <input type="text" name="planCardCode" value={patientFormData.planCardCode} onChange={handlePatientChange} placeholder="Código do Plano" />
        <input type="text" name="planName" value={patientFormData.planName} onChange={handlePatientChange} placeholder="Nome do Plano" />
      
      <h2>Endereço</h2>
      <input type="text" name="postal_code" value={addressFormData.postal_code} onChange={handleAddressChange} placeholder="CEP" />
        <input type="text" name="street" value={addressFormData.street} onChange={handleAddressChange} placeholder="Rua" />
        <input type="text" name="city" value={addressFormData.city} onChange={handleAddressChange} placeholder="Cidade" />
        <input type="text" name="country" value={addressFormData.country} onChange={handleAddressChange} placeholder="País" />
        <input type="number" name="address_number" value={addressFormData.address_number} onChange={handleAddressChange} placeholder="Número do Endereço" />
      
      <h2>Opções</h2>
      <label>
          Ortopedia
          <input type="checkbox" name="ortho" checked={orthoChecked} onChange={handleCheckboxChange} />
        </label>
        <label>
          VIP
          <input type="checkbox" name="vip" checked={vipChecked} onChange={handleCheckboxChange} />
        </label>

        <button type="submit">Cadastrar</button>
    </form>
  );
};

export default RegisterForm;
