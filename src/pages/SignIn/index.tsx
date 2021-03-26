// import {Link} from 'react-router-dom'
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content, Foot, Icons, TextContent, TextIntro} from './styles';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <TextContent>
          <p className="show-welcome">WELCOME TO</p>
          <h1>NAVEDEX</h1>
          <p className="show-enterData">Entre com seu usuário e senha para acessar nossa plataforma!</p>
        </TextContent>

        <Input name="Email" placeholder="Email"/>
        <Input name="Password" placeholder="Senha"/>
        <Button type="submit">Entrar</Button>
        <Foot>
          <p>Não possui uma conta? <a href="google.com">Crie uma conta</a> </p>
          <p className="light-text">Ou</p>
          <p className="light-text">Entre com alguma rede social</p>
        </Foot>
        <Icons>
          <a href="https://www.facebook.com"><img src={facebook} alt="facebook"/></a>
          <a href="https://www.linkedin.com"><img src={linkedin} alt="linkedin"/></a>
        </Icons>

      </Content>
      <Background>
        <TextIntro>
          <h1>NAVEDEX</h1>
          <p>Encontre o seu parceiro ideal de projeto!</p>
        </TextIntro>
      </Background>
    </Container>
  );
};

export default SignIn;