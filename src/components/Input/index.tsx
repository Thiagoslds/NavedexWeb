import React, {InputHTMLAttributes} from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
};

const Input: React.FC<InputProps> = ({children, ...rest}) => (
    <Container {...rest}>
        {children}
    </Container>
);

export default Input;