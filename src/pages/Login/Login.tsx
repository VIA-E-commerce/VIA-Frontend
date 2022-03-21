import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import { SquareButton } from '@/components';
import {
  AuthForm,
  AuthInput,
  OAuthButtonGroup,
  AuthSection,
  useLogin,
} from '@/features/auth';
import { useForm } from '@/hooks';
import { AuthType, LoginForm } from '@/types';
import { setRedirect } from '@/utils';

const initJoinForm: LoginForm = {
  email: '',
  password: '',
};

const Login = () => {
  const location = useLocation();

  const { mutate } = useLogin();
  const { register, onSubmit, errors } = useForm(initJoinForm, mutate);
  const authType: AuthType = 'login';

  useEffect(() => {
    setRedirect(location);
  }, [location]);

  return (
    <AuthSection>
      <AuthForm title={authType} onSubmit={(event) => onSubmit(event)}>
        <AuthInput
          errors={errors}
          {...register({
            name: 'email',
            type: 'email',
            placeholder: '이메일',
            validation: {
              required: '이메일은 필수 입력 항목입니다.',
              maxLength: {
                value: 255,
                message: '이메일이 너무 깁니다.',
              },
              pattern: {
                value: /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/i,
                message: '이메일 형식에 맞게 입력해주세요.',
              },
            },
          })}
        />
        <AuthInput
          errors={errors}
          {...register({
            name: 'password',
            type: 'password',
            placeholder: '비밀번호',
            validation: {
              required: '비밀번호는 필수 입력 항목입니다.',
              minLength: {
                value: 8,
                message: `비밀번호는 최소 ${8}자 이상이어야 합니다.`,
              },
              maxLength: {
                value: 255,
                message: `비밀번호는 ${255}자 이하여야 합니다.`,
              },
            },
          })}
        />
        <SquareButton wide>로그인</SquareButton>
      </AuthForm>
      <OAuthButtonGroup type={authType} />
    </AuthSection>
  );
};

export default Login;
