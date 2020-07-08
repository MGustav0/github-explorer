import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repositorio">
          <img src="avatar" alt="avatar" />
          <div>
            <strong>repositorio</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositorio">
          <img src="avatar" alt="avatar" />
          <div>
            <strong>repositorio</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositorio">
          <img src="avatar" alt="avatar" />
          <div>
            <strong>repositorio</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
