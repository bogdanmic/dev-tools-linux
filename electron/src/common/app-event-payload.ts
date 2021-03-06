import { AppEvent } from './app-event';

export class AppEventPayload {

    private _event: AppEvent;
    private _data: any;

    constructor(event: AppEvent, data: any) {
        this._event = event
        this._data = data
    }

    static fromJSON(d: any): AppEventPayload {
        return Object.assign(new AppEventPayload(d._event, d._data));
    }

    public get data(): any {
        return this._data;
    }

    public get event(): AppEvent {
        return this._event;
    }
}