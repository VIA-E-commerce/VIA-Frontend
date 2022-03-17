import React from 'react';

import { LabelField, ButtonGroup, SquareInput } from '@/components';
import { SizeValueResponse, VariantResponse } from '@/types';
import { convertArrayToObject } from '@/utils';

interface SizeSelectorProps {
  sizes: SizeValueResponse[];
  sizeId: number | null;
  setSizeId: React.Dispatch<React.SetStateAction<number | null>>;
  variants: VariantResponse[];
}

const SizeSelector = ({
  sizes,
  sizeId,
  setSizeId,
  variants,
}: SizeSelectorProps) => {
  const variantsObject = convertArrayToObject(
    variants,
    (variant) => variant.sizeId,
  );

  return (
    <LabelField label="사이즈">
      <ButtonGroup buttonWidth={80} gap={8}>
        {sizes.map((size: SizeValueResponse) => {
          let disabled = false;

          if (variants.length) {
            disabled =
              !variantsObject[size.id] ||
              variantsObject[size.id].quantity === 0;
          }

          return (
            <SquareInput
              key={size.id}
              id={`size-${size.id}`}
              name="size"
              variant="outline"
              size="small"
              label={size.label}
              checked={size.id === sizeId}
              disabled={disabled}
              onChange={() => setSizeId(size.id)}
            />
          );
        })}
      </ButtonGroup>
    </LabelField>
  );
};

export default React.memo(SizeSelector);
