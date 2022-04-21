import { Lightning, Router } from '@lightningjs/sdk'
import MenuItem from './MenuItem'

export default class MenuWidget extends Lightning.Component {
  static _template() {
    return {
      x: -500,
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

  _init() {
    this.index = 0
  }

  _focus() {
    this.patch({
      x: 0,
    })
  }

  _unfocus() {
    this.patch({
      x: -500,
    })
  }

  _handleRight() {
    Router.focusPage()
  }

  _handleUp() {
    if (this.index > 0) {
      this.index--
    }
  }

  _handleDown() {
    if (this.index < this.tag('MenuItems').children.length - 1) {
      this.index++
    }
  }

  _handleEnter() {
    Router.focusPage()
    Router.navigate(this.getActiveItem().menuName)
  }

  _getFocused() {
    return this.getActiveItem()
  }

  getActiveItem() {
    return this.tag('MenuItems').children[this.index]
  }
}
