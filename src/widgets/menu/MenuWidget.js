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
        // Items: {
        //   Item1: {
        //     menuName: 'Home',
        //     type: MenuItem,
        //   },
        //   Item2: {
        //     menuName: 'Home',
        //     type: MenuItem,
        //   },
        // },
      },
    }
  }

  _setup() {
    const menuTitles = ['Home', 'About2']
    const menuItems = menuTitles.map((item, index) => {
      return {
        ['Item' + index]: {
          menuName: item,
          type: MenuItem,
        },
      }
    })
    console.debug('Menu items...')
    console.debug(menuItems)
    this.tag('MenuItems').patch(menuItems)
  }
}
