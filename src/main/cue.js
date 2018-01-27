import MVVM from '../mvvm'

let Cue = function (options) {

  console.log(options)
  this.vm = new MVVM(options)
}
export default Cue