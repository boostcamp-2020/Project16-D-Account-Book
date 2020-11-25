// 배경색에 따라 텍스트 색상을 리턴하는 함수
export const getTextColor = (background: string): string => {
  background = background.replace('#', '');
  const r = parseInt(background.substr(0, 2), 16);
  const g = parseInt(background.substr(2, 2), 16);
  const b = parseInt(background.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? 'black' : 'white';
};
