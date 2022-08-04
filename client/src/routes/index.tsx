import { ReactNode } from 'react';
import uniqid from 'uniqid';
import { pages } from 'src/pages/index';

const { CalendarOptim, Home, NotFound, PostEvent } = pages;

interface Routes {
  key: string | number;
  path: string;
  element: ReactNode;
}

const routes: Routes[] = [
  {
    key: uniqid(),
    path: '/',
    element: <Home />,
  },
  {
    key: uniqid(),
    path: '/calender_optimization',
    element: <CalendarOptim />,
  },
  {
    key: uniqid(),
    path: '/post_event_analysis',
    element: <PostEvent />,
  },
  {
    key: uniqid(),
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
