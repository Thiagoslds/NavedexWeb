import React from 'react';
import {
  Route as ReactRoute,
  RouteProps, 
  Redirect
} from 'react-router-dom';

import {useAuth} from '../hooks/AuthContext'

interface RoutePropsI extends RouteProps{
  isPrivate?: boolean;
  component: React.ComponentType; /* Sobrescrita do método, para receber no formato de objeto */
}

const Route: React.FC<RoutePropsI> = ({isPrivate=false, component:Component, ...rest}) => {
  const {user} =useAuth(); //atraves do contexto pega o login do usuario
  return(
    <ReactRoute
    {...rest}
    
    render={()=>{ 
        if(isPrivate === !!user){
          return (<Component/>);
        } else if (isPrivate) {
          return <Redirect to='/'/>;
        }
          return <Redirect to='/dashboard'/>;
      }}
    />
  )
}

export default Route;