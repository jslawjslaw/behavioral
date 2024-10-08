
class WordRepetitionTrial {
    constructor(config) {
        this.ItemNum = config.ItemNum
        this.TrialType = config.TrialType
        this.Item = config.Item
        this.startTime = null
        this.responseTime = null
        this.TimedOut = false
        this.Accuracy = -1
        this.Repetitions = 0
        this.TrialWasAdministered = true
    }

    get columns() {
        return [
            ...Object.keys(this),
            'TimeOnItem',
            'Time',
            'Date',
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
        return `https://crlabgeorgetown.github.io/behavioral/static/wordRepetition/${this.Item}.mp4`
    }
}


export { WordRepetitionTrial }