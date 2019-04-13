import { AppEvent } from './app-event';

export class EventResponse {

    _event: AppEvent;
    _successful: boolean;
    _value: string | null;
    _message: string | null;

    constructor(event: AppEvent, successful: boolean, value: string | null, message: string | null) {
        this._event = event
        this._successful = successful
        this._value = value
        this._message = message
    }

    static fromJSON(d: any): EventResponse {
        return Object.assign(new EventResponse(d._event, d._successful, d._value, d._message));
    }

    public get message(): string | null {
        return this._message;
    }

    public get value(): string | null {
        return this._value;
    }

    public get successful(): boolean {
        return this._successful;
    }

    public get event(): AppEvent {
        return this._event;
    }
}