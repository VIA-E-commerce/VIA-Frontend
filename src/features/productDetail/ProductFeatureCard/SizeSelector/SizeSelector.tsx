import React from 'react';

import { LabelField, ButtonGroup, SquareInput } from '@/components';
import { SizeValueResponse } from '@/types';

interface SizeSelectorProps {
  sizes: SizeValueResponse[];
  setSizeId: React.Dispatch<React.SetStateAction<number | null>>;
}

const SizeSelector = ({ sizes, setSizeId }: SizeSelectorProps) => {
  return (
    <LabelField label="사이즈">
      <ButtonGroup buttonWidth={80} gap={8}>
        {sizes.map((size: SizeValueResponse) => (
          <SquareInput
            key={size.id}
            id={`size-${size.id}`}
            name="size"
            variant="outline"
            size="small"
            label={size.label}
            onClick={() => setSizeId(size.id)}
          />
        ))}
      </ButtonGroup>
    </LabelField>
  );
};

export default React.memo(SizeSelector);
