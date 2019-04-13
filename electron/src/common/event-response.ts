import { AppEvent } from './app-event';

export class EventResponse {

    private _event: AppEvent;
    private _successful: boolean;
    private _value: string | null;
    private _message: string | null;

    constructor(event: AppEvent, successful: boolean, value: string | null, message: string | null) {
        this._event = event
        this._successful = successful
        this._value = value
        this._message = message
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