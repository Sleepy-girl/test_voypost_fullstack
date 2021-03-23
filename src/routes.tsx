import { lazy } from 'react';

export const routes = [
  {
    path: '/story-book',
    name: 'StoryBook',
    component: lazy(() =>
      import('./pages/StoryBook' /* webpackChunkName: "StoryBook" */),
    ),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: lazy(() =>
      import('./pages/Auth' /* webpackChunkName: "Auth" */),
    ),
  },
];