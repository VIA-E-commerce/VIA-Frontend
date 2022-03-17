import React from 'react';

import { LabelField, ColorInput, ButtonGroup } from '@/components';
import { ColorResponse } from '@/types';

interface ColorSelectorProps {
  colors: ColorResponse[];
  setColorId: React.Dispatch<React.SetStateAction<number | null>>;
}

const ColorSelector = ({ colors, setColorId }: ColorSelectorProps) => {
  return (
    <LabelField label="색상">
      <ButtonGroup buttonWidth={40} gap={8}>
        {colors.map((color: ColorResponse) => (
          <ColorInput
            key={color.id}
            id={`color-${color.id}`}
            name="color"
            hexCode={color.hexCode}
            onClick={() => setColorId(color.id)}
          />
        ))}
      </ButtonGroup>
    </LabelField>
  );
};

export default React.memo(ColorSelector);
