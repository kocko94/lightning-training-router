import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class BootPage extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xffb5b8ff,
      },
      Logo: {
        mount: 0.5,
        x: 960,
        y: 540,
        src: Utils.asset('images/logo.png'),
      },
      Label: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 1080,
        text: {
          text: 'Press enter to continue...',
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate('home')
  }
}
