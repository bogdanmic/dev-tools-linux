import { EventResponse } from '../common/event-response';
import { AppEventPayload } from '../common/app-event-payload';

export interface Task {
    execute(event: AppEventPayload): EventResponse;
}