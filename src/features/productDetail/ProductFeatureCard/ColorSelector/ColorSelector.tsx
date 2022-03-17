import React, { useMemo } from 'react';

import { LabelField, ColorInput, ButtonGroup } from '@/components';
import { ColorResponse, VariantResponse } from '@/types';

interface ColorSelectorProps {
  colors: ColorResponse[];
  colorId: number | null;
  setColorId: React.Dispatch<React.SetStateAction<number | null>>;
  variants: VariantResponse[];
}

const ColorSelector = ({
  colors,
  colorId,
  setColorId,
  variants,
}: ColorSelectorProps) => {
  const quantityInfo = useMemo(
    () =>
      variants.reduce(
        (obj, variant: VariantResponse) => ({
          ...obj,
          [variant.colorId]: (obj[variant.colorId] || 0) + variant.quantity,
        }),
        {} as Record<number, number>,
      ),
    [variants],
  );

  return (
    <LabelField label="색상">
      <ButtonGroup buttonWidth={40} gap={8}>
        {colors.map((color: ColorResponse) => (
          <ColorInput
            key={color.id}
            id={`color-${color.id}`}
            name="color"
            hexCode={color.hexCode}
            checked={color.id == colorId}
            disabled={!quantityInfo[color.id]}
            onChange={() => setColorId(color.id)}
          />
        ))}
      </ButtonGroup>
    </LabelField>
  );
};

export default React.memo(ColorSelector);
