// import {Link} from 'react-router-dom'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content, Foot, TextContent, TextIntro} from './styles';
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
        <Background>
        <TextIntro>
          <h1>NAVEDEX</h1>
          <p>Encontre o seu parceiro ideal de projeto!</p>
        </TextIntro>
      </Background>
      <Content>
        <TextContent>
          <p className="show-welcome">WELCOME TO</p>
          <h1>NAVEDEX</h1>
          <p className="show-enterData">Crie sua conta cadastrando seu email e senha.</p>
        </TextContent>

          <form onSubmit={formik.handleSubmit}>
            <Input name="email" type="email" placeholder="Coloque seu email" onChange={formik.handleChange}
            value={formik.values.email}/>
            <Input name="password" type='password' placeholder="Crie sua senha" onChange={formik.handleChange}
            value={formik.values.password}/>
            <Button type="submit">Cadastrar</Button>
          </form>

        <Foot>
          <p>Já possui uma conta? <a href="/">Faça seu login</a> </p>
        </Foot>
      </Content>
      
    </Container>
  );
};

export default SignUp;
