import MVVM from '../mvvm'
import {
  log,
  warn
} from '../utils'

export default function Cue (options) {
  log(options)

  this.el = document.querySelector(options.target)
  this.vm = new MVVM({
    view: this.el,
    data: options.data,
    methods: options.methods,
    computed: options.computed
  })

}
