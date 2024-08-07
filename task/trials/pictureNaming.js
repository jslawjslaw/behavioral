

class PictureNamingTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        this.CRESP = config.CRESP
        this.Response = 'NR'
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Accuracy = -1
        this.Repetitions = 0
        this.TrialWasAdministered = 1

        // preload image
        new Image().src = this.source
    }

    get columns() {
        return [
            ...Object.keys(this),
            'Time',
            'Date',
            'TimeOnItem',
        ]
    }

    get TimeOnItem() {
        return this.responseTime - this.startTime
    }

    get Time() {
        return this.startTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24'})
    }

    get Date() {
        return this.startTime.toLocaleDateString('en-US')
    }

    get source() {
        return `https://crlabgeorgetown.github.io/behavioral/static/pictureNaming/${this.Item.charAt(0).toUpperCase()}${this.Item.slice(1)}.jpg`
    }
}


export { PictureNamingTrial }