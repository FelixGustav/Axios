import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário de atualizar a página

    try {
      
      const response = await axios.post('https://api.example.com/users', {
        name: name,
        email: email
      });
      
      // Se a chamada for bem-sucedida, você pode lidar com a resposta aqui, se necessário
      console.log('Resposta da API:', response.data);

      // Limpa os campos do formulário após o envio
      setName('');
      setEmail('');
    } catch (error) {
      // Se ocorrer um erro, você pode lidar com ele aqui
      console.error('Erro ao enviar dados do usuário:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Novo Usuário</h2>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Adicionar Usuário</button>
      </form>
    </div>
  );
};

export default UserForm;
