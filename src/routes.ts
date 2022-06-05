import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import DaPingLayout from '@/layouts/DaPingLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const DaPing = lazy(() => import('@/pages/DaPing'));
const routerConfig: IRouterConfig[] = [
  {
    path: '/daping',
    component: DaPingLayout,
    children: [
      {
        path: '/1',
        component: DaPing,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
