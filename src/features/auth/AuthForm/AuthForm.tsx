import React, { FormEventHandler, ReactNode } from 'react';
import { AuthType } from '@/types';
import { Form, AuthTitle } from './AuthForm.styles';

interface Props {
  title: AuthType;
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const AuthForm = ({ title, children, onSubmit }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <AuthTitle>
        <span>{title}</span>
      </AuthTitle>
      {children}
    </Form>
  );
};

export default AuthForm;
