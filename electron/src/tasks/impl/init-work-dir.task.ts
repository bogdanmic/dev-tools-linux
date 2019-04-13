import { Task } from '../task.interface';
import { EventResponse } from '../../common/event-response';
import * as child from 'child_process'
import { AppEventPayload } from '../../common/app-event-payload';

const { dialog } = require('electron').remote
const fileSystem = require('electron').remote.require('fs')

export default class InitWorkDir implements Task {
    execute(eventPayload: AppEventPayload): EventResponse {
        let successful: boolean = false
        let message: string | null = null
        let workDir: string | null = null

        child.exec('echo "I just did something!' + eventPayload.data + ' `date`" >> lol2.txt')

        return new EventResponse(eventPayload.event, successful, workDir, message);
    }

}