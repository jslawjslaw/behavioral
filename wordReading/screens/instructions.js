import { INSTRUCTION_BUTTON_CONTAINER } from "../../shared/components/instructionButtons"
import { TEXT_CONTAINER } from "../../shared/components/textContainer"
import Screen from "../../shared/screens/base"


class InstructionsOne extends Screen {
    components = new Map([
        [TEXT_CONTAINER, {text: 'You will see a word on the screen.\nRead the word out loud.', addClass: 'base-text large-text'}],
        [INSTRUCTION_BUTTON_CONTAINER, {}]
    ])

    get clickHandlers() {
        return {
            nextButton: () => this.instructionButtonClickHandler('next'),
            previousButton: () => this.instructionButtonClickHandler('previous')
        }
    }
}


export { InstructionsOne }