import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class NotFoundPage extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff6a8a5e,
      },
      Title: {
        mountX: 0.5,
        x: 960,
        y: 0,
        text: {
          text: 'Not found page',
        },
      },
      Label: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 1080,
        text: {
          text: 'Press enter to go to the home page...',
        },
      },
      NavIndicator: {
        x: 1800,
        y: 540,
        flex: {},
        mount: 0.5,
        Label: {
          text: {
            text: 'Home',
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
    Router.navigate('home')
  }
}
