import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){
      axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(response => {
          const repositories = response.data;
          const repositoriesName = []; 
          repositories.map((repository) => {
            repositoriesName.push(repository.name);
          });
       localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
       setErro(false);
       history.push('/repositories');
       })
        .catch (err =>{
          setErro(true)
        });
  }

  return (
    <S.HomeContainer>
      <S.DivTitle>
        <S.Title>Procure por repositórios de um usuário do GitHub:</S.Title>
      </S.DivTitle>
      <S.DivContent>
        <S.Input className="usuarioInput" placeholder="Insira um nome" value= {usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.DivContent>
        { erro ? <S.ErrorMsg>Algo está errado. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default App;
