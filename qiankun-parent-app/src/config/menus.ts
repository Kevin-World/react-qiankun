export interface MenuProps {
  title: string;
  path: string;
}

const MenuList: MenuProps[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'React App',
    path: '/micro-app/react/demo',
  },
  {
    title: 'Vue App',
    path: '/micro-app/vue/demo',
  },
  {
    title: 'Manual Load App',
    path: '/manual-load',
  },
];

export default MenuList;