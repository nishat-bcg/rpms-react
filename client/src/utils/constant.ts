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

export const lastEdited = () => {
  const time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  let tm = time.split(',');
  return tm[1].replace(/PM|AM/i, '').trim() + ' ' + tm[0];
};
