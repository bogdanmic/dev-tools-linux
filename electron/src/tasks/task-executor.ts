import { AppEvent } from '../common/app-event';
import { EventResponse } from '../common/event-response';
import TaskProvider from './task-provider';
import { Task } from './task.interface';
import { AppEventPayload } from '../common/app-event-payload';

const crypto = require('crypto')
const { dialog } = require('electron').remote

export default class TaskExecutor {

    static doTask(eventPayloadJson: AppEventPayload): EventResponse {
        // The method argument arrives here as a Json not an object so the code
        // doesn't work unless we turn it into object. Same thing happens with
        // the EventResponse of the task when it arrives in the renderer thread.
        let eventPayload = AppEventPayload.fromJSON(eventPayloadJson)

        let task: Task | null = TaskProvider.getTask(eventPayload.event);
        if (task) {
            return task.execute(eventPayload)
        }
        return new EventResponse(eventPayload.event, false, null, `No task implementation found for event: ${eventPayload.event}`)
    }
}

module.exports = TaskExecutor.doTask