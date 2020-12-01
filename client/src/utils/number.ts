export const numberWithCommas = (x: number | undefined): string => {
  if (x === undefined) return 'error';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
