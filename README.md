# 📍 Buscador de CEP (React + Vite + MVC)

Uma aplicação web simples e rápida para buscar endereços no Brasil utilizando o CEP, construída com **React** e estruturada com base nos princípios da arquitetura **MVC (Model-View-Controller)**. 

O projeto consome a API pública do [ViaCEP](https://viacep.com.br/) e demonstra como separar regras de negócio, chamadas de API e interface do usuário no ecossistema React.

## ✨ Funcionalidades

- Busca de endereço completo por CEP (Logradouro, Bairro, Cidade, UF, DDD).
- Máscara automática de CEP no input (`00000-000`).
- Tratamento de erros (CEP inválido, formato incorreto ou não encontrado).
- Bloqueio do botão de busca durante o carregamento (Loading state).
- Estilização encapsulada utilizando CSS Modules.

## 🏗️ Arquitetura (MVC no React)

O projeto foi dividido em três camadas principais dentro da pasta `src/`:

*   **Model (`src/models`)**: Responsável por lidar com a fonte de dados externa. Contém a função `fetchCepData` que faz a requisição HTTP para a API do ViaCEP e trata o retorno bruto.
*   **Controller (`src/controllers`)**: Implementado através de um Custom Hook (`useCepController.js`). Ele gerencia os estados (loading, error, data), aplica a lógica da máscara de input e faz a ponte entre a View e o Model.
*   **View (`src/views`)**: A interface visual da aplicação (`CepView.jsx` e `CepView.module.css`). É um componente "burro" que apenas consome os dados e funções fornecidos pelo Controller para renderizar a tela.

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (Build tool rápida)
- CSS Modules (Estilização sem escopo global)
- [ViaCEP API](https://viacep.com.br/) (Fonte de dados)

## 📦 Como rodar o projeto localmente

Siga os passos abaixo para executar a aplicação na sua máquina:

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/TatianeCMessias/Consulta-CEP.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd consulta-cep
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   - Abra o link fornecido no terminal (geralmente `http://localhost:5173/`).

6. **Acesse pelo Vercel:**
   - Link executável: [ConsultaCep](https://consulta-cep-orpin.vercel.app/)

## 📁 Estrutura de Pastas

```text
📦 src
 ┣ 📂 controllers
 ┃ ┗ 📜 useCepController.js
 ┣ 📂 models
 ┃ ┗ 📜 CepModel.js
 ┣ 📂 views
 ┃ ┣ 📂 footer
 ┃ ┃ ┣ 📜 footer.jsx
 ┃ ┃ ┗ 📜 Footer.module.css
 ┃ ┣ 📂 header
 ┃ ┃ ┣ 📜 header.jsx
 ┃ ┃ ┗ 📜 Header.module.jsx
 ┃ ┗ 📂 main   
 ┃    ┣ 📜 CepView.jsx
 ┃    ┗ 📜 CepView.module.css
 ┣ 📜 App.jsx
 ┗ 📜 main.jsx
```
