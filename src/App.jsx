import { useState } from 'react'
import './App.css'

function App() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <button onClick={adicionarContato}>Adicionar Contato</button>
      </div>
      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            <strong>{contato.nome}:</strong> {contato.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App
