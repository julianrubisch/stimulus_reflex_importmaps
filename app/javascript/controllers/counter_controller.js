import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Counter Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  connect () {
    super.connect()
  }

  increment() {
    this.stimulate('Counter#increment', 1)
  }

  // beforeIncrement(element, reflex, noop, reflexId) {
  //  console.log("before increment", element, reflex, reflexId)
  // }

  // incrementSuccess(element, reflex, noop, reflexId) {
  //   console.log("increment success", element, reflex, reflexId)
  // }

  // incrementError(element, reflex, error, reflexId) {
  //   console.error("increment error", element, reflex, error, reflexId)
  // }

  // incrementHalted(element, reflex, noop, reflexId) {
  //   console.warn("increment halted", element, reflex, reflexId)
  // }

  // afterIncrement(element, reflex, noop, reflexId) {
  //   console.log("after increment", element, reflex, reflexId)
  // }

  // finalizeIncrement(element, reflex, noop, reflexId) {
  //   console.log("finalize increment", element, reflex, reflexId)
  // }
}
