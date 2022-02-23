import React, { ReactNode } from 'react';
import { Form, AuthTitle } from './AuthForm.styles';

interface Props {
  title: 'join' | 'login';
  children: ReactNode;
}

const AuthForm = ({ title, children }: Props) => {
  return (
    <Form>
      <AuthTitle>
        <span>{title}</span>
      </AuthTitle>
      {children}
    </Form>
  );
};

export default AuthForm;
