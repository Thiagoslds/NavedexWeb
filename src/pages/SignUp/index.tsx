// import {Link} from 'react-router-dom'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content, Foot, Icons, TextContent, TextIntro} from './styles';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import { useCallback, useContext } from 'react';
import {AuthContext} from '../../hooks/AuthContext';
import { useFormik } from 'formik';

interface SignUpFormData {
  email: string,
  password: string
}

const SignUp: React.FC = () => {
  const {signUp} = useContext(AuthContext);

  const handleSubmitDatas = useCallback(async (data: SignUpFormData) => {
      await signUp({
        email: data.email,
        password: data.password
      })
    
    }, [signUp]
  );

  const formik = useFormik({
    initialValues: { email: '', password: ''},
    onSubmit: handleSubmitDatas
  });

  return (
    <Container>
      <Content>
        <TextContent>
          <p className="show-welcome">WELCOME TO</p>
          <h1>SIGNUPPPPPPPP</h1>
          <p className="show-enterData">Entre com seu usuário e senha para acessar nossa plataforma!</p>
        </TextContent>

          <form onSubmit={formik.handleSubmit}>
            <Input name="email" type="email" placeholder="Email" onChange={formik.handleChange}
            value={formik.values.email}/>
            <Input name="password" type='password' placeholder="Senha" onChange={formik.handleChange}
            value={formik.values.password}/>
            <Button type="submit">Entrar</Button>
          </form>

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

export default SignUp;
