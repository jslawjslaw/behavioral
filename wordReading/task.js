import { ParticipantIdScreen } from "../shared/screens/participantID"
import { BaseTask } from "../shared/task"
import { InstructionsOne, InstructionsTwo } from "./screens/instructions"
import { TrialScreen } from "./screens/trial"
import { QualtricsClient } from "../shared/qualtricsClient"
import { Trial } from "./trial"
import { TaskType } from "./constants"


class Task extends BaseTask {
	constructor(data, engine, taskType) {
        super()
        
        this.engine = engine
        this.trials = []
        this.data = data
        this.dataIndex = 0
        this.inTrial = false
        this.type = TaskType.fromString(taskType)

        this.initializeScreens()
	}

    initializeScreens() {
        this.trialScreen = new TrialScreen(this)

        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InstructionsOne(this),
        ]
        if (this.type.shouldShowInstructionScreenTwo) {
            this.instructionScreens.push(new InstructionsTwo(this))
        }

        this.instructionScreens.push(
            this.letsPracticeScreen,
            this.trialScreen,
        )

        this.setupInstructionScreens()
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    get currentProcedure() {
        return this.data[this.dataIndex].Procedure
    }

    get nextProcedure() {
        return this.data[this.dataIndex + 1].Procedure
    }

    get isDone() {
        return this.dataIndex === this.data.length - 1
    }

    newTrial() {
        this.trials.push(new Trial(this.data[this.dataIndex]))
    }

    submit() {
        const columns = [
            'ItemNum',
            'Date',
            'Time',
            'TimeOnItem',
            'Item',
            'TimedOut',
            'TrialType',
            'Repetitions',
            'WordType',
            'Imageability',
            'Frequency',
            'Regularity',
            'PartofSpeech',
        ]
        if (window.location.host === "georgetown.az1.qualtrics.com") {
            const qualtricsClient = new QualtricsClient(columns, 'mouse', this.participantID)
            qualtricsClient.collectTrialData(this.trials)
            qualtricsClient.submitEmbeddedData()
            this.engine.clickNextButton()
        }
    }
}


export { Task }