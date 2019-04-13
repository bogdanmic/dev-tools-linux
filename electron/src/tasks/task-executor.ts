import { AppEvent } from '../common/app-event';
import { EventResponse } from '../common/event-response';
import TaskProvider from './task-provider';
import { Task } from './task.interface';

const crypto = require('crypto')
const { dialog } = require('electron').remote

export default class TaskExecutor {

    static doTask(event: AppEvent): EventResponse {

        let task: Task = TaskProvider.getTask(event);
        return task.execute(event)
    }
}

module.exports = TaskExecutor.doTask