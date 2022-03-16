import React, { useCallback, useState } from 'react';

interface NumberValidation {
  input?: number;
  min?: number;
  max?: number;
}

interface NumberInputHookProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  handleExcessMin?: ({ input, min }: NumberValidation) => void;
  handleExcessMax?: ({ input, max }: NumberValidation) => void;
}

export const useNumberInput = ({
  defaultValue = 0,
  min = 0,
  max,
  handleExcessMin,
  handleExcessMax,
}: NumberInputHookProps) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    setValue(value);
  }, []);

  const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;

    if (value < min) {
      handleExcessMin && handleExcessMin({ input: value, min, max });
      setValue(min);
    } else if (max && max < value) {
      handleExcessMax && handleExcessMax({ input: value, min, max });
      setValue(max);
    }
  }, []);

  const onClickSpinButton = useCallback((addend: number) => {
    setValue((prev) => {
      const next = prev + addend;

      if (next < min) {
        handleExcessMin && handleExcessMin({ input: value, min, max });
        return prev;
      } else if (max && max < next) {
        handleExcessMax && handleExcessMax({ input: next, min, max });
        return prev;
      }

      return next;
    });
  }, []);

  return {
    value,
    min,
    max,
    onChange,
    onBlur,
    onClickSpinButton,
  };
};
