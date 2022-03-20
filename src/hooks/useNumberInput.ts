import React, { useCallback, useState } from 'react';

interface NumberValidation {
  input?: number;
  min?: number;
  max?: number;
}

interface NumberInputHookProps {
  defaultValue?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  handleExcessMin?: ({ input, min }: NumberValidation) => void;
  handleExcessMax?: ({ input, max }: NumberValidation) => void;
}

export const useNumberInput = ({
  defaultValue: rawDefaultValue = 0,
  disabled,
  min: defaultMin = 0,
  max,
  handleExcessMin,
  handleExcessMax,
}: NumberInputHookProps) => {
  const defaultValue =
    max !== undefined ? Math.min(rawDefaultValue, max) : rawDefaultValue;
  const min = max !== undefined ? Math.min(defaultMin, max) : defaultMin;

  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const changedValue = parseInt(event.target.value) || 0;
      if (disabled) return;
      setValue(changedValue);
    },
    [disabled],
  );

  const checkNumberRange = useCallback(
    (value: number, min: number, max?: number) => {
      if (value < min) {
        handleExcessMin && handleExcessMin({ input: value, min });
        return min;
      } else if (max !== undefined && max < value) {
        handleExcessMax && handleExcessMax({ input: value, max });
        return max;
      }
      return value;
    },
    [handleExcessMin, handleExcessMax],
  );

  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const targetValue = parseInt(event.target.value) || 0;
      setValue((prev) => checkNumberRange(targetValue, min, max));
    },
    [min, max],
  );

  const onClickSpinButton = useCallback(
    (addend: number) => {
      if (disabled) return;

      setValue((prev) => {
        const next = prev + addend;
        return checkNumberRange(next, min, max);
      });
    },
    [disabled, min, max],
  );

  return {
    value,
    setValue,
    disabled,
    min,
    max,
    onChange,
    onBlur,
    onClickSpinButton,
  };
};
