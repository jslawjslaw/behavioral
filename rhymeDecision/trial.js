import { BaseTrial } from "../shared/trial"

class Trial extends BaseTrial {
    constructor(config) {
        super()
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Sound1 = config.Sound1
        this.Sound2 = config.Sound2
        this.RhymeMatch = config.RhymeMatch
        this.OrthoMatch = config.OrthoMatch
        this.CRESP = config.CRESP
        this.Response = null
        this.startTime = null
        this.responseTime = null
    }

    get RT() {
        return this.responseTime - this.startTime
    }

    get TimedOut() {
        return this.Response === 'NR'
    }

    get Accuracy() {
        return this.Response === this.CRESP ? 1 : 0
    }

    get Time() {
        return this.startTime.toTimeString().split(' ')[0]
    }
}


export { Trial }