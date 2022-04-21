import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class AboutPage extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xffb5b8ff,
      },
      Title: {
        mountX: 0.5,
        x: 960,
        y: 0,
        text: {
          text: 'About page',
        },
      },
      Logo: {
        mount: 0.5,
        x: 960,
        y: 540,
        w: 321,
        h: 500,
        src: Utils.asset('images/sponge-bob.png'),
      },
      Label: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 1080,
        text: {
          text: 'Press enter to go back to the home page...',
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate('home')
  }
}
