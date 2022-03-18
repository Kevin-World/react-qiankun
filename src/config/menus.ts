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
    path: '/react-micro-app/demo',
  },
  {
    title: 'Vue App',
    path: '/vue-micro-app/demo',
  },
];

export default MenuList;