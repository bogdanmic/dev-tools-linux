import { AppEvent } from '../common/app-event';
import { EventResponse } from '../common/event-response';

export interface Task {
    execute(event: AppEvent): EventResponse;
}