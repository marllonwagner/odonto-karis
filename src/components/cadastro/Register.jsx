import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

const Register = () => {
  const [patientFormData, setPatientFormData] = useState({
    name: '',
    age: '',
    cpf: '',
    rg: '',
    email: '',
    phone1: '',
    phone2: '',
    planCardCode: '',
    planName: '',
  });

  const [addressFormData, setAddressFormData] = useState({
    postal_code: '',
    street: '',
    city: '',
    country: '',
    address_number: '',
  });

  const [orthoChecked, setOrthoChecked] = useState(false);
  const [vipChecked, setVipChecked] = useState(false);

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'ortho') {
      setOrthoChecked(checked);
    } else if (name === 'vip') {
      setVipChecked(checked);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/patients/create', {
        createPatientDto: {
          ...patientFormData,
          ortho: orthoChecked,
          vip: vipChecked,
          age:Number(patientFormData.age)
        },
        createAddressDto: {...addressFormData,
          address_number:Number(addressFormData.address_number)
        },
      });
      alert('Paciente cadastrado com sucesso!');
      // Limpar os formulários após o cadastro bem-sucedido
      setPatientFormData({
        name: '',
        age: '',
        cpf: '',
        rg: '',
        email: '',
        phone1: '',
        phone2: '',
        planCardCode: '',
        planName: '',
        clinic_id: 1,
      });
      setAddressFormData({
        postal_code: '',
        street: '',
        city: '',
        country: '',
        address_number: '',
      });
      setOrthoChecked(false);
      setVipChecked(false);
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
      alert('Erro ao cadastrar paciente. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h1>Cadastro de Paciente</h1>
      <RegisterForm handleSubmit={handleSubmit}
      patientFormData={patientFormData}
      addressFormData={addressFormData}
      orthoChecked={orthoChecked}
      vipChecked={vipChecked}
      handlePatientChange={handlePatientChange}
      handleAddressChange={handleAddressChange}
      handleCheckboxChange={handleCheckboxChange}/>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </div>
  );
};

export default Register;
