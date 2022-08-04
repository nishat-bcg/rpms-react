export const DRAWER_WIDTH = 240;

export function ColorIndicator(target: string) {
  switch (target) {
    case 'Sales Dilutive':
      return '#c31653';
    case 'Expensive':
      return '#d7df3c';
    case 'Effective':
      return '#7ca893';
    case 'Self Funding':
      return '#54775c';
    default:
      return '';
  }
}
