import dayjs from 'dayjs';

export function formatPrice(price: number, option?: { unit?: boolean }) {
  let priceWithComma = price.toLocaleString('ko-kr');
  if (option?.unit) {
    priceWithComma = `${priceWithComma}원`;
  }

  return priceWithComma;
}

export function formatDate(date?: Date, format = 'YYYY년 M월 D일') {
  if (!date) return '';

  const dayjsDate = dayjs(date).format(format);
  return dayjsDate;
}

export function formatPhone(phone?: string) {
  if (!phone) return '';

  return phone
    .trim()
    .replace(/(^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3');
}

export function hexToRGB(hex: string, opacity?: number) {
  let hexString = hex.replace('#', '');

  // 단축 코드 처리
  switch (hexString.length) {
    case 1:
      hexString = Array(6 + 1).join(hexString);
      break;
    case 2:
      hexString = Array(3 + 1).join(hexString);
      break;
    case 3:
      hexString = hexString.split('').reduce((acc, str) => acc + str + str, '');
      break;
  }

  const r = parseInt(hexString.substring(0, 2), 16);
  const g = parseInt(hexString.substring(2, 4), 16);
  const b = parseInt(hexString.substring(4, 6), 16);

  if (!opacity) return `rgb(${r}, ${g}, ${b})`;

  let a = opacity;
  if (hexString.length === 8) {
    const aString = hexString.substring(6, 8);
    a = Math.floor((parseInt(aString, 16) / 255) * 1000) / 1000;
  }

  return `rgb(${r}, ${g}, ${b}, ${a})`;
}

export function convertArrayToObject<
  T extends Record<K, any>,
  K extends keyof any,
>(array: T[] = [], getKey: (item: T) => K) {
  return array.reduce((obj, item) => {
    const key = getKey(item);
    return { ...obj, [key]: item };
  }, {} as Record<K, T>);
}
