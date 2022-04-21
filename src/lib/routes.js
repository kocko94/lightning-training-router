import HomePage from '../pages/HomePage'
import BootPage from '../pages/BootPage'

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
  ],
}
