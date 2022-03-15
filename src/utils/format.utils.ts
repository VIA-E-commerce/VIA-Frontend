export function formatPrice(price: number) {
  return price.toLocaleString('ko-kr');
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
