import { useEffect, useMemo, useState } from 'react';

import { useNumberInput } from '@/hooks';
import { ProductDetailResponse, VariantResponse } from '@/types';

interface UseProductControlPanelProps {
  product: ProductDetailResponse;
}

export const useProductControlPanel = ({
  product,
}: UseProductControlPanelProps) => {
  const [colorId, setColorId] = useState<number | null>(product.colors[0]?.id);
  const [sizeId, setSizeId] = useState<number | null>(null);
  const [variant, setVariant] = useState<VariantResponse | null>(null);

  const [totalPrice, setTotalPrice] = useState(0);

  const variantsFilteredByColor = useMemo(() => {
    setSizeId(null);
    setVariant(null);
    return product.variants.filter((variant) => variant.colorId === colorId);
  }, [colorId]);

  const {
    value: quantity,
    setValue: setQuantity,
    ...numberInputProps
  } = useNumberInput({
    defaultValue: 1,
    disabled: !colorId || !sizeId,
    min: 1,
    max: variant?.quantity || 1,
    handleExcessMax: ({ max }) =>
      alert(`최대 ${max}개까지 구매할 수 있습니다.`),
  });

  useEffect(() => {
    if (!colorId || !sizeId) {
      setQuantity(1);
      return;
    }

    const selectedVariant = product.variants.find(
      (variant) => variant.colorId === colorId && variant.sizeId === sizeId,
    );
    setVariant(selectedVariant || null);
    setQuantity(1);
  }, [colorId, sizeId]);

  useEffect(() => {
    if (variant) {
      setTotalPrice(product.sellingPrice * quantity);
    }
  }, [variant, quantity]);

  return {
    quantity,
    colorId,
    sizeId,
    variant,
    totalPrice,
    setColorId,
    setSizeId,
    variantsFilteredByColor,
    numberInputProps,
  };
};
