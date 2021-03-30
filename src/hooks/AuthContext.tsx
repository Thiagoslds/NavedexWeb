import {createContext, useCallback, useContext, useState} from 'react';
import api from '../services/api';

interface AuthState {
  token: string,
  user: object
}

interface SignCredentials {
    email: string,
    password: string
}

interface AuthContextI {
    user: object;
    signIn(credentials: SignCredentials): Promise<void>;
    signUp(credentials: SignCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextI>({} as AuthContextI);

export const AuthProvider: React.FC = ({children}) => {

  // Será aplicada quando acontecer um refresh
  const [data, setData] = useState<AuthState>( () => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if(token && user) {
      // /*Coloca o token como padrão no cabeçalho, permitindo utilizar sempre quando dá F5*/
      // api.defaults.headers.authorization = `Bearer ${token}`;
      return {token, user: JSON.parse(user)}
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({email, password}) => {
      const response = await api.post('login', {
          email,
          password
      });
      const {token, user} = response.data; 

      localStorage.setItem('@Navedex:token', token);
      localStorage.setItem('@Navedex:user', JSON.stringify(user));

      setData({token, user});
  }, []);

  const signUp = useCallback(async ({email, password}) => {
    const response = await api.post('users/signup', {
        email,
        password
    });
    console.log(response.data);
}, []);

  return (
      <AuthContext.Provider value= {{user: data.user, signIn, signUp}} >
          {children}
      </AuthContext.Provider> 
  );
};

export function useAuth(): AuthContextI{
    const context = useContext(AuthContext);

    if(!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider')

    return context;
}