// Import and register all your controllers from the importmap under controllers/*

import StimulusReflex from "stimulus_reflex";
import { application } from "controllers/application"

// needed to obtain the ActionCable consumer
import { cable } from "@hotwired/turbo-rails";

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

// initialize StimulusReflex
const consumer = cable.getConsumer()
StimulusReflex.initialize(application, { consumer });