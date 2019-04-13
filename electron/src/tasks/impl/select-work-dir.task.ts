import { Task } from '../task.interface';
import { AppEvent } from '../../common/app-event';
import { EventResponse } from '../../common/event-response';
import * as path from 'path'

const { dialog } = require('electron').remote
const fileSystem = require('electron').remote.require('fs')

export default class SelectWorkDir implements Task {
    execute(event: AppEvent): EventResponse {
        let successful: boolean = false
        let message: string | null = null
        let workDir: string | null = null

        let selectedDir = dialog.showOpenDialog({ properties: ['openDirectory'] });
        if (selectedDir) {
            workDir = selectedDir[0]
            message = `Selected work directory [${workDir}]`
            successful = true
        } else {
            message = "Select a valid directory!"
        }

        // Now that we selected a working directory we can check if it's writeable
        if (successful && workDir != null) {
            // fileSystem.access(path.join(workDir), fileSystem.constants.W_OK, function (err: any) {
            //     if (err) {
            //         console.error("can't write");
            //         process.exit(1);
            //     }
            //     console.log("can write");
            //     process.exit(0);
            // });
            // I tried to use the solution above to check for write access but for some reason it did not work
            // The solution above works if it's executed in the main thread.
            try {
                fileSystem.writeFileSync(path.join(workDir, 'test-write-access'))
                fileSystem.unlinkSync(path.join(workDir, 'test-write-access'))
            } catch (e) {
                successful = false
                message = `Selected work directory [${workDir}] is not writeable!`
            }
        }

        return new EventResponse(event, successful, workDir, message);
    }

}