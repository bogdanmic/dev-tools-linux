import { Task } from '../task.interface';
import { AppEvent } from '../../common/app-event';
import { EventResponse } from '../../common/event-response';

export default class SelectWorkDir implements Task{
    execute(event: AppEvent): EventResponse {
        let response = new EventResponse(event, true, event, `DemoTask(${event}-${event}):SelectWorkDir(${event})!`);
        return response
    }

}