import { CONTAINER } from '../../shared/components/container'


export default class Screen {
    constructor(task) {
        this.task = task
        this.previousScreen = null
        this.nextScreen = null
        this.renderTime = null
    }

    get clickHandlers() {
        return {}
    }

    render() {
        CONTAINER.children().detach()
        for (const [component, settings] of this.components.entries()) {
            for (const [setting, value] of Object.entries(settings)) {
                if (setting === 'addClass') {
                    component.removeClass()
                }
                component[setting](value)
            }
            CONTAINER.append(component)
        }
        this.updateClickHandlers()
        this.renderTime = new Date()
    }

    updateClickHandlers() {
        for (const [id, callback] of Object.entries(this.clickHandlers)) {
            const element = jQuery(`#${id}`)
            element.off('click')
            element.on('click', () => callback())
        }
    }

    inputDeviceClickHandler(inputDevice) {
        this.task.inputDevice = inputDevice
        this.task.currentScreen = this.nextScreen
        this.task.currentScreen.render()
    }

    instructionButtonClickHandler(action) {
        switch (action) {
            case 'previous':
                this.task.currentScreen = this.previousScreen
                break
            case 'next':
                this.task.currentScreen = this.nextScreen
                break
        }
        this.task.currentScreen.render()
    }

    audioContainerClickHandler(nextItem, audio) {
        if (Date.now() - this.renderTime > 500) {
            audio.addEventListener('ended', () => this.containerClickHandler(nextItem))
            audio.play()
        }
    }

    containerClickHandler(nextItem) {
        if (Date.now() - this.renderTime > 500) {
            CONTAINER.off('click')
            if (nextItem) {
                this.task.dataIndex++
            }
            this.task.currentScreen = this.task.trialScreen
            this.task.currentScreen.render()
        }
    }
}