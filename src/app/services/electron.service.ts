import { Injectable } from '@angular/core';
import * as Electron from 'electron';
import { ElectronWindow } from './electron-window.interface';

declare let window: ElectronWindow;

@Injectable({
    providedIn: 'root'
})
// Built after: https://github.com/ThorstenHans/ngx-electron/blob/master/projects/ngx-electron/src/lib/electron.service.ts
export class ElectronService {
    private electron: Electron.RendererInterface;
    constructor() {
        if (!this.electron) {
            if (window && window.require) {
                this.electron = window.require('electron');
            }
            return null;
        }
    }

    public get isElectronApp(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }

    public get isMacOS(): boolean {
        return this.isElectronApp && process.platform === 'darwin';
    }

    public get isWindows(): boolean {
        return this.isElectronApp && process.platform === 'win32';
    }

    public get isLinux(): boolean {
        return this.isElectronApp && process.platform === 'linux';
    }

    public get isX86(): boolean {
        return this.isElectronApp && process.arch === 'ia32';
    }

    public get isX64(): boolean {
        return this.isElectronApp && process.arch === 'x64';
    }

    public get ipcRenderer(): Electron.IpcRenderer {
        return this.electron ? this.electron.ipcRenderer : null;
    }
}
