import { Lightning } from '@lightningjs/sdk'
import MenuItem from './MenuItem'

export default class MenuWidget extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 500,
        h: 1080,
        color: 0xffe9ed66,
      },
      MenuItems: {
        x: 150,
        y: 540,
        mountY: 0.5,
        flex: {
          direction: 'column',
        },
        Item1: {
          menuName: 'Home',
          type: MenuItem,
        },
        Item2: {
          menuName: 'About',
          type: MenuItem,
        },
      },
    }
  }
}
