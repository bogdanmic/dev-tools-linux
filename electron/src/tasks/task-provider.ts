import { AppEvent } from '../common/app-event';
import { EventResponse } from "../common/event-response";
import { Task } from './task.interface';
import SelectWorkDir from './impl/select-work-dir.task';

// https://github.com/Microsoft/tsyringe

export default class TaskProvider {
    static getTask(event: AppEvent): Task {
        return new SelectWorkDir();
    }
}