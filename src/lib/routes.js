import HomePage from '../pages/HomePage'
import BootPage from '../pages/BootPage'
import AboutPage from '../pages/AboutPage'

export default {
  routes: [
    {
      path: '$',
      component: BootPage,
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
