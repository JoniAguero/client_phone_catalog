// Layouts
import LayoutBasic from '../layouts/LayoutBasic';

// Pages
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Detail from '../pages/Detail';

const routes = [
  {
    path: '/',
    layout: LayoutBasic,
    component: Home,
    exact: true,
  },
  {
    path: '/:id',
    layout: LayoutBasic,
    component: Detail,
    exact: true,
  },
  {
    layout: LayoutBasic,
    component: Error404,
  },
];

export default routes;