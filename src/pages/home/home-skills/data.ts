export const cuboids = [
  {
    id: 'c_1',
    width: 90,
    height: 90,
    length: 160,
    color: '#d3d0ff',
    variants: { enter: { x: [50, 0] }, exit: { x: 50 } },
  },
  {
    id: 'c_2',
    width: 90,
    height: 90,
    length: 90,
    color: '#d3d0ff',
    variants: { enter: { x: [100, 0] }, exit: { x: 100 } },
  },
  {
    id: 'c_3',
    width: 90,
    height: 90,
    length: 90,
    color: '#d3d0ff',
    variants: { enter: { x: [50, 0] }, exit: { x: 50 } },
  },
  {
    id: 'c_4',
    width: 90,
    height: 90,
    length: 90,
    color: '#ffe0f2',
    variants: { enter: { x: [50, 0] }, exit: { x: 50 } },
  },
]

export const skills = [
  {
    title: 'HTML',
    percent: 95,
  },
  {
    title: 'CSS',
    percent: 95,
  },
  {
    title: 'JavaScript',
    percent: 90,
  },
  {
    title: 'React',
    percent: 90,
  },
  {
    title: 'Responsive',
    percent: 90,
  },
  {
    title: 'Next',
    percent: 80,
  },
  {
    title: 'Git',
    percent: 80,
  },
  {
    title: 'Sass',
    percent: 80,
  },
  {
    title: 'Redux/Zustand',
    percent: 75,
  },
  {
    title: 'Agile',
    percent: 65,
  },
  {
    title: 'Framer Motion',
    percent: 65,
  },
  {
    title: 'TypeScript',
    percent: 60,
  },
  {
    title: 'Antd',
    percent: 60,
  },
  {
    title: 'Socket/Realtime',
    percent: 50,
  },
  {
    title: 'Tailwind',
    percent: 50,
  },
  {
    title: 'Electron',
    percent: 30,
  },
  {
    title: 'Extension',
    percent: 30,
  },
  {
    title: 'PWA',
    percent: 30,
  },
  {
    title: 'Monorepo',
    percent: 20,
  },
  {
    title: 'Telegram Bot',
    percent: 30,
  },
].sort((a, b) => (a.percent < b.percent ? 1 : a.percent === b.percent ? 0 : -1))
