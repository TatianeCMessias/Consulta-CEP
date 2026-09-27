export const fetchCepData = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  
  if (!response.ok) {
    throw new Error('Erro ao conectar com a API');
  }
  
  const data = await response.json();
  
  // O ViaCEP retorna um objeto { erro: true } se o formato for válido mas não existir
  if (data.erro) {
    throw new Error('CEP não encontrado na base de dados');
  }
  
  return data;
};