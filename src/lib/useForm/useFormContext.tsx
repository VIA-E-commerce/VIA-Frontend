import React, { createContext, ReactNode, useContext } from 'react';

import { UseFormReturn, Form } from './types';

const FormContext = createContext<UseFormReturn | null>(null);

export const useFormContext = <
  SubmitForm extends Form,
>(): UseFormReturn<SubmitForm> =>
  useContext(FormContext) as UseFormReturn<SubmitForm>;

interface FormProviderProps<T extends Form> extends UseFormReturn<T> {
  children: ReactNode;
}

export const FormProvider = <SubmitForm extends Form>(
  props: FormProviderProps<SubmitForm>,
) => {
  const { children, ...rest } = props;

  return (
    <FormContext.Provider value={{ ...rest } as UseFormReturn}>
      {children}
    </FormContext.Provider>
  );
};
