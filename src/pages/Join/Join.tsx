import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import { SquareButton } from '@/components';
import {
  AuthCheckBox,
  AuthForm,
  AuthInput,
  OAuthButtonGroup,
  AuthSection,
  useJoin,
} from '@/features/auth';
import { useForm } from '@/hooks';
import { AuthType, JoinForm } from '@/types';
import { setRedirect } from '@/utils';

const initJoinForm: JoinForm = {
  email: '',
  name: '',
  password: '',
};

const Join = () => {
  const location = useLocation();
  const { mutate } = useJoin();
  const { register, onSubmit, errors } = useForm(initJoinForm, mutate);
  const authType: AuthType = 'join';

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
              required: '이메일을 입력해주세요.',
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
            name: 'name',
            type: 'text',
            placeholder: '이름',
            validation: {
              required: '이름을 입력해주세요.',
              minLength: {
                value: 2,
                message: `이름은 최소 ${2}자 이상이어야 합니다.`,
              },
              maxLength: {
                value: 17,
                message: `이름은 ${17}자 이하여야 합니다.`,
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
              required: '비밀번호를 입력해주세요.',
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
        <AuthInput
          errors={errors}
          {...register({
            name: 'confirmPassword',
            type: 'password',
            placeholder: '비밀번호 확인',
            validation: {
              required: '비밀번호 확인을 입력해주세요.',
              match: {
                value: 'password',
                message: '비밀번호가 일치하지 않습니다.',
              },
            },
          })}
        />
        <div>
          <AuthCheckBox
            label="서비스 이용약관 (필수)"
            {...register({
              name: 'agreeToUseService',
              type: 'checkbox',
              validation: {
                required: '서비스 이용약관 동의는 필수입니다.',
              },
            })}
          />
          <AuthCheckBox
            label="개인정보 수집 및 이용 동의 (필수)"
            {...register({
              name: 'agreeToUsePersnalInfo',
              type: 'checkbox',
              validation: {
                required: '개인정보 수집 및 이용 동의는 필수입니다.',
              },
            })}
          />
        </div>
        <SquareButton wide>회원가입</SquareButton>
      </AuthForm>
      <OAuthButtonGroup type={authType} />
    </AuthSection>
  );
};

export default Join;
