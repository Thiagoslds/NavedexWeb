import React from 'react';
import { Card, Container, Content, Header, Menu } from './styles';
import img1 from '../../assets/pessoa1.jpg';
import img2 from '../../assets/pessoa2.jpg';
import img3 from '../../assets/pessoa3.jpg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import { Icons } from './styles';

const Dashboard: React.FC = () => { 
  return (
    <Container>
      <Header>
        <h1>NAVEDEX</h1>
        <a href="#">Sair</a>
      </Header>
      <Menu>
        <h1>Navers</h1>
        <button> <a href="#">Adicionar Naver</a> </button>
      </Menu>
      <Content>
        <Card>
          <img src={img1} alt="pessoa 1"/>
          <h2>Thiago</h2>
          <p>Desenvolvedor</p>
          <Icons>
            <a href=""> <img src={editIcon} alt=""/> </a>
            <a href=""> <img src={deleteIcon} alt=""/> </a>
          </Icons>
        </Card>
        <Card>
          <img src={img2} alt="pessoa 2"/>
          <h2>Alan</h2>
          <p>Desenvolvedor</p>
          <Icons>
            <a href=""> <img src={editIcon} alt=""/> </a>
            <a href=""> <img src={deleteIcon} alt=""/> </a>
          </Icons>
        </Card>
        <Card>
          <img src={img3} alt="pessoa 3"/>
          <h2>Ana</h2>
          <p>Desenvolvedora</p>
          <Icons>
            <a href=""> <img src={editIcon} alt=""/> </a>
            <a href=""> <img src={deleteIcon} alt=""/> </a>
          </Icons>
        </Card>
      </Content>
    </Container>
  ) 
};
    
export default Dashboard;