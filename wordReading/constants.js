import Beep from '../static/wordReading/beep_440Hz_300ms.wav'
import Pseudoword1Beep from '../static/wordReading/92_ETID.wav'
import Pseudoword2Beep from '../static/wordReading/93_ETID.wav'
import MultimorphemicBeep from '../static/wordReading/87_ETID.wav'
import POSBeep from '../static/wordReading/71_ETID.wav'

const CROSSED_REAL = 'CROSSED_REAL'
const PSEUDOWORD_1 = 'PSEUDOWORD_1'
const PSEUDOWORD_2 = 'PSEUDOWORD_2'
const MULTIMORPHEMIC = 'MULTIMORPHEMIC'
const POS_AND_LENGTH_EFFECT = 'POS_AND_LENGTH_EFFECT'


class TaskType {
    static CrossedReal = new TaskType(CROSSED_REAL)
    static Pseudoword1 = new TaskType(PSEUDOWORD_1)
    static Pseudoword2 = new TaskType(PSEUDOWORD_2)
    static Multimorphemic = new TaskType(MULTIMORPHEMIC)
    static POSAndLengthEffect = new TaskType(POS_AND_LENGTH_EFFECT)

    constructor(name) {
        this.name = name
        this.trialAudio = new Audio(Beep)
        this.beginBeep = {
            [PSEUDOWORD_1]: new Audio(Pseudoword1Beep),
            [PSEUDOWORD_2]: new Audio(Pseudoword2Beep),
            [MULTIMORPHEMIC]: new Audio(MultimorphemicBeep),
            [POS_AND_LENGTH_EFFECT]: new Audio(POSBeep)
        }
    }

    static fromString(string) {
        switch(string) {
            case CROSSED_REAL:
                return TaskType.CrossedReal
            case PSEUDOWORD_1:
                return TaskType.Pseudoword1
            case PSEUDOWORD_2:
                return TaskType.Pseudoword2
            case MULTIMORPHEMIC:
                return TaskType.Multimorphemic
            case POS_AND_LENGTH_EFFECT:
                return TaskType.POSAndLengthEffect
            default:
                throw new Error(`Undefined task type: ${string}`)
        }
    }

    get beginAudio() {
        return this.beginBeep[this.name]
    }
}


export { TaskType }