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
    // {
    //   path: 'about/:someData',
    //   component: AboutPage,
    // },
  ],
  beforeEachRoute(from, to) {
    return new Promise(resolve => {
      let loggedIn = true
      if (to._hash === 'about' && !loggedIn) {
        console.debug('User not logged in!')
        resolve(false)
      } else {
        console.debug('Welcome user!')
        resolve(true)
      }
    })
  },
  afterEachRoute(to) {
    console.debug('Page ' + to._hash + ' loaded!')
  },
}
