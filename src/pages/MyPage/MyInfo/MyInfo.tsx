import React, { useCallback } from 'react';

import {
  LabelField,
  Tab,
  Input,
  PhoneInput,
  SNSProviderIcon,
  SquareButton,
} from '@/components';
import { DATE_FORMAT, INPUT_OPTIONS, LOGIN_PROVIDERS } from '@/constants';
import { useDeleteAccount } from '@/features/auth';
import { useEditMyInfoMutation } from '@/features/mypage';
import { useForm } from '@/lib';
import { RawMyInfoForm, SNSProvider, UserSummary } from '@/types';
import { formatDate } from '@/utils';

import {
  MyInfoForm,
  InnerWrapper,
  FormFooter,
  DeleteAccountButton,
} from './MyInfo.styles';

const getSNSIcon = (myProvider?: SNSProvider): JSX.Element | undefined => {
  if (!myProvider) return;

  const snsProvider = LOGIN_PROVIDERS.find(
    (provider) => provider.code === myProvider,
  );

  if (snsProvider) {
    return <SNSProviderIcon provider={snsProvider} />;
  }
};

interface Props {
  me: UserSummary;
}

const MyInfo = ({ me }: Props) => {
  const useFormReturns = useForm<RawMyInfoForm>();
  const { mutate: editMyInfoMutate } = useEditMyInfoMutation();

  const { register, errors, handleSubmit } = useFormReturns;

  const onSubmit = async (form: RawMyInfoForm) => {
    const { name, phone1, phone2 } = form;

    editMyInfoMutate({
      name,
      phone: phone1 + phone2,
    });
  };

  const { mutate: deleteAccountMutate } = useDeleteAccount();
  const handleDeleteAccount = useCallback((event: React.MouseEvent) => {
    event.preventDefault();

    if (confirm('정말 탈퇴하시겠습니까?')) {
      deleteAccountMutate();
    }
  }, []);

  return (
    <Tab>
      <MyInfoForm onSubmit={handleSubmit(onSubmit)}>
        <InnerWrapper>
          <LabelField label="이메일">
            <Input name="email" defaultValue={me.email} readOnly />
          </LabelField>
          <LabelField label="이름">
            <Input
              errorMessage={errors['name']}
              {...register({
                name: 'name',
                defaultValue: me.name,
                validationRules: INPUT_OPTIONS.NAME,
              })}
            />
          </LabelField>
          <LabelField label="휴대폰">
            <PhoneInput
              name="phone"
              defaultValue={me.phone}
              register={register}
              errors={errors}
            />
          </LabelField>
          <LabelField label="SNS 연동">
            {getSNSIcon(me.provider) || '없음'}
          </LabelField>
          <LabelField label="가입일">
            {formatDate(me.createdAt, DATE_FORMAT.KOR_DATE_TIME)}
          </LabelField>
          <FormFooter>
            <SquareButton wide>회원 정보 수정</SquareButton>

            <DeleteAccountButton onClick={handleDeleteAccount}>
              회원 탈퇴
            </DeleteAccountButton>
          </FormFooter>
        </InnerWrapper>
      </MyInfoForm>
    </Tab>
  );
};

export default MyInfo;
