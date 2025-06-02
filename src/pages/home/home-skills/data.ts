export const cuboids = [
  {
    id: 'c_1',
    width: 80,
    height: 80,
    length: 160,
    color: '#d3d0ff',
    animateInfo: { x: [-50, 0] },
  },
  {
    id: 'c_2',
    width: 80,
    height: 80,
    length: 80,
    color: '#d3d0ff',
    animateInfo: { x: [-100, 0] },
  },
  {
    id: 'c_3',
    width: 80,
    height: 80,
    length: 80,
    color: '#d3d0ff',
    animateInfo: { x: [-50, 0] },
  },
  {
    id: 'c_4',
    width: 80,
    height: 80,
    length: 80,
    color: '#ffe0f2',
    animateInfo: { x: [-50, 0] },
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
    percent: 70,
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
    title: 'Agile',
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
    title: 'Framer Motion',
    percent: 40,
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
].sort((a, b) => (a.percent < b.percent ? 1 : a.percent === b.percent ? 0 : -1))
