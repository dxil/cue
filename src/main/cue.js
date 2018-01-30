import MVVM from '../mvvm'
import {
  log,
  warn
} from '../utils'

export default function Cue (options) {
  log(options)

  this.el = document.querySelector(options.target)
  this.vm = new MVVM(options)

}
