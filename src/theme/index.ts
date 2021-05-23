const colors = {
  darkest: 'rgba(9, 12, 11, 1)',
  darkGreen: 'rgba(14, 22, 18, 1)',
  green: 'rgba(18 ,29 ,22, 1)',
  lightGreen: 'rgba(63, 119, 89, 1)',
  rose: '#eb9598',
  salmon: '#ee61cf',
  lightBlue: 'rgba(172, 196, 239, 1)',
  light: 'rgba(161, 133, 130, 1)',
  purple: 'rgba(49, 27, 120, 1)',
  purple30: 'rgba(49, 27, 120, 0.3)',
  violet30: 'rgba(198, 74, 168, 0.3)',
};

const theme = {
  colors,
  shadow: {
    dark: 'rgba(11, 18, 32, 0.5)',
  },
  columns: (val: number) => `${(val / 12) * 100}vw`,
};

export default theme;
