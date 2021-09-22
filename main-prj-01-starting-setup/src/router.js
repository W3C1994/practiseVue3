import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail';
import CoachesList from './pages/coaches/CoachesList';
import CoachesRegistration from './pages/coaches/CoachesRegistration';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path:'/', redirect:'/coaches'},
    {path: '/coaches', component: CoachesList},
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {path:'contact', component: ContactCoach} // /coaches/c1/contact
      ]},
    {path: '/register', component: CoachesRegistration},
    {path: '/requester', component: RequestsReceived},
    {path: '/:notFound(.*)',component:NotFound},

  ],
});

export default router;
