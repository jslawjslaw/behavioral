import { InputDevicesScreen } from "../shared/screens/inputDevices"
import { ParticipantIdScreen } from "../shared/screens/participantID"
import { BaseTask } from "../shared/task"
import { InstructionsOne } from "./screens/instructions"
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
        this.inTrial = false
        this.type = TaskType.fromString(taskType)

        this.initializeScreens()
	}

    initializeScreens() {
        this.trialScreen = new TrialScreen(this)

        this.instructionScreens = [
            new ParticipantIdScreen(this),
            new InputDevicesScreen(this), 
            new InstructionsOne(this),
            this.letsPracticeScreen,
            this.trialScreen,
        ]

        this.setupInstructionScreens()
    }

    get currentTrial() {
        return this.trials[this.trials.length - 1]
    }

    get currentProcedure() {
        return this.data[this.trials.length - 1].Procedure
    }

    get isDone() {
        return this.data.length === this.trials.length
    }

    newTrial() {
        this.trials.push(new Trial(this.data[this.trials.length]))
    }

    submit() {
        const columns = [
            'ItemNum',
            'CRESP',
            'TimedOut',
            'RT',
            'Accuracy',
            'Response',
            'Sound1',
            'Sound2',
            'RhymeMatch',
            'OrthoMatch',
            'TrialType',
            'Time',
        ]
        if (window.location.host === "georgetown.az1.qualtrics.com") {
            const qualtricsClient = new QualtricsClient(columns, this.inputDevice, this.participantID)
            qualtricsClient.collectTrialData(this.trials)
            qualtricsClient.submitEmbeddedData()
            this.engine.clickNextButton()
        }
    }
}


export { Task }