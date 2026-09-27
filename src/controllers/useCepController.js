import { useState } from 'react';
import { fetchCepData } from '../models/CepModel';

export const useCepController = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para aplicar a máscara 00000-000
  const handleCepChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    
    // Limita a 8 dígitos numéricos
    value = value.substring(0, 8); 
    
    // Aplica o traço após o 5º dígito
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    
    setCep(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    
    // Remove o traço para validação e consulta
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      setError('O CEP deve conter exatamente 8 números.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // Passamos o CEP limpo (sem traço) para o Model
      const data = await fetchCepData(cleanCep);
      setAddress(data);
    } catch (err) {
      setError(err.message);
      setAddress(null);
    } finally {
      setLoading(false);
    }
  };

  return { 
    cep, 
    handleCepChange, // Exportamos a nova função
    address, 
    error, 
    loading, 
    handleSearch 
  };
};