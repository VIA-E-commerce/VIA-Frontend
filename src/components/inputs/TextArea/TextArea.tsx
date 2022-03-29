import React from 'react';

import { styles } from '@/styles';

import { StyledTextArea } from './TextArea.styles';

interface Props {
  name: string;
  autoHeight?: boolean;
  placeholder?: string;
  maxLength?: number;
  style?: React.CSSProperties;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({
  autoHeight,
  maxLength,
  onChange,
  value,
  ...rest
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    if (onChange) {
      if (maxLength !== undefined && maxLength < value.length) return;
      onChange(event);
    }

    if (autoHeight) {
      // auto-height 로직
      const { target } = event;

      target.style.height = 'auto'; // 줄어든 내용에 맞춰 높이 축소
      const newHeight =
        target.scrollHeight + styles.border.level1 * styles.remToPx;
      target.style.height = newHeight + 'px'; // 늘어난 내용에 맞춰 높이 확장
    }
  };

  return (
    <StyledTextArea
      maxLength={maxLength}
      onChange={handleChange}
      value={value}
      {...rest}
    />
  );
};

export default React.memo(TextArea);
