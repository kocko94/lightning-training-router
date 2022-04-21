import { Lightning, Router, Utils } from '@lightningjs/sdk'

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
      NavIndicator: {
        x: 1800,
        y: 540,
        flex: {},
        mount: 0.5,
        Label: {
          text: {
            text: 'About',
          },
        },
        Arrow: {
          rotation: Math.PI * 0.5,
          src: Utils.asset('images/arrow.png'),
        },
      },
    }
  }

  _handleEnter() {
    // Router.navigate('about')
    Router.navigate('about', { someData: 'hello world' })
  }

  _handleLeft() {
    Router.focusWidget('Menu')
  }
}
