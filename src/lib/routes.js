import HomePage from '../pages/HomePage'
import BootPage from '../pages/BootPage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'

export default {
  routes: [
    {
      path: '$',
      component: BootPage,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
    {
      path: 'home',
      component: HomePage,
    },
    {
      path: 'about',
      component: AboutPage,
    },
  ],
}
