// This is a sub event that we send the main process so that it knows what to do.
export enum AppEvent {
    SELECT_WORK_DIR = "SELECT_WORK_DIR",
    INIT_WORK_DIR = "INIT_WORK_DIR"
}
// This is the main event that the main process listens too.
export enum MainEvent {
    INTER_PROCESS_EVENT = "INTER_PROCESS_EVENT"
}