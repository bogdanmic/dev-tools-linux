import { Component } from '@angular/core';
import { ElectronService } from './services/electron.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dev-tools-linux';

    constructor(private ipc: ElectronService) { }

    doSomething(): void {
        console.log("I'm doing something")
        console.log(this.ipc.isLinux)
        console.log(this.ipc.isX64)
        console.log(this.ipc.isX86)

        this.ipc.ipcRenderer.send('do-something')
        this.ipc.ipcRenderer.on('do-something', () => {
            console.log("Done")
        })
    }
}
