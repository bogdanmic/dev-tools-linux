import { AppEvent } from '../common/app-event';
import { Task } from './task.interface';
import SelectWorkDir from './impl/select-work-dir.task';
import InitWorkDir from './impl/init-work-dir.task';

// https://github.com/Microsoft/tsyringe

export default class TaskProvider {
    static getTask(event: AppEvent): Task | null {
        switch (event) {
            case AppEvent.SELECT_WORK_DIR:
                return new SelectWorkDir();
            case AppEvent.INIT_WORK_DIR:
                return new InitWorkDir();
            default:
                return null;
        }
    }
}