import { Lightning, Router } from '@lightningjs/sdk'

export default class HomePage extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
      },
      Title: {
        mountX: 0.5,
        x: 960,
        y: 0,
        text: {
          text: 'Home page',
        },
      },
      Label: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 1080,
        text: {
          text: 'Press enter to go to the about page...',
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate('about')
  }
}
