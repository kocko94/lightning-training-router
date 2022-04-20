import { Lightning } from '@lightningjs/sdk'

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
      Label: {
        mount: 0.5,
        x: 500,
        y: 500,
        text: {
          text: 'HomePage',
        },
      },
    }
  }
}
