import { lazy } from 'react';
export const pages = {
  Home: lazy(() => import('src/pages/Home/index')),
  CalendarOptim: lazy(() => import('src/pages/CalendarOptim/index')),
  PostEvent: lazy(() => import('src/pages/PostEvent/index')),
  NotFound: lazy(() => import('src/pages/404/index')),
};
