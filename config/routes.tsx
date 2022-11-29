import {
  LaptopOutlined,
  NotificationOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

export const TopRightNavigationRoutes = [
  { key: '1', label: 'max', route: 'users' },
  {
    key: '3',
    label: 'Logout',
    route: 'login',
    icon: <LogoutOutlined />,
  },
];

export const SideNavigationRoutes = [
  { key: '1', label: 'Home', route: '/' },
  { key: '2', label: 'Users', route: '/users' },
];
