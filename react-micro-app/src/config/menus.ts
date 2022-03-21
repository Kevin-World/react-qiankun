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
    title: 'Users',
    path: '/user/list',
  },
  {
    title: 'Setting',
    path: '/settings',
  },
];

export default MenuList;