import Orchestrator from "./orchestrator"
import QualtricsClient from "./qualtricsClient"
import { variantFromString } from "./variants"
import { CONTAINER } from "../shared/components/container"


class Task {
    constructor(data, engine, variantString) {
        jQuery("#Questions").remove()
        jQuery("#PushStickyFooter").remove()
        jQuery("#Plug").hide()
        jQuery(".SkinInner").hide()
        jQuery("#Wrapper").append(CONTAINER)
        
        console.log('hello')
        const variant = variantFromString(variantString)
        this.orchestrator = new Orchestrator(variant, new QualtricsClient(engine, variant))
        this.orchestrator.initialize(data)
        this.orchestrator.render()
    }
}


export { Task }