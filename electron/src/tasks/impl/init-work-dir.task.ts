import { Task } from '../task.interface';
import { EventResponse } from '../../common/event-response';
import * as child from 'child_process'
import { AppEventPayload } from '../../common/app-event-payload';
import { AppConstants } from '../../common/app-constants';

const { dialog } = require('electron').remote
const fileSystem = require('electron').remote.require('fs')

export default class InitWorkDir implements Task {
    execute(eventPayload: AppEventPayload): EventResponse {
        let workDir: string = eventPayload.data

        let successful: boolean = true
        let message: string | null = `[${workDir}] initialized`

        try {
            let isDirectory: boolean = fileSystem.lstatSync(workDir).isDirectory()
            if (!isDirectory) {
                successful = false
                message = `[${workDir}] is not a directory`
            } else {
                child.exec(`mkdir -p ${workDir}${AppConstants.SETUP_PATH_PRIVATE}`, (error, stdout, stderr) => {
                    if (error) {
                        successful = false
                        message = `Could not create [${workDir}${AppConstants.SETUP_PATH_PRIVATE}] directory. Error: ${stderr}`
                    }
                });
                child.exec(`mkdir -p ${workDir}${AppConstants.SETUP_PATH_CONTAINERS}`, (error, stdout, stderr) => {
                    if (error) {
                        successful = false
                        message = `Could not create [${workDir}${AppConstants.SETUP_PATH_CONTAINERS}] directory. Error: ${stderr}`
                    }
                });
                child.exec(`mkdir -p ${workDir}${AppConstants.SETUP_PATH_TOOLS}`, (error, stdout, stderr) => {
                    if (error) {
                        successful = false
                        message = `Could not create [${workDir}${AppConstants.SETUP_PATH_TOOLS}] directory. Error: ${stderr}`
                    }
                });
                child.exec(`mkdir -p ${workDir}${AppConstants.SETUP_PATH_WORK}`, (error, stdout, stderr) => {
                    if (error) {
                        successful = false
                        message = `Could not create [${workDir}${AppConstants.SETUP_PATH_WORK}] directory. Error: ${stderr}`
                    }
                });
            }
        } catch (e) {
            successful = false
            message = `An error occurred ${e}`
        }

        return new EventResponse(eventPayload.event, successful, null, message);
    }

}