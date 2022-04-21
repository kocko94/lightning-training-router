import { Lightning } from '@lightningjs/sdk'

export default class MenuWidget extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 500,
        h: 1080,
        color: 0xffe9ed66,
      },
    }
  }
}
