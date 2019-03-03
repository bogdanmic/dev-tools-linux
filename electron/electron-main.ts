// The start of this project is from: https://github.com/electron/electron-quick-start
// Other resources used to sketch this up:
//  - https://www.christianengvall.se/electron-packager-tutorial/
//  - https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/
//  - https://medium.com/@davembush/typescript-and-electron-the-right-way-141c2e15e4e1
// Modules to control application life and create native browser window
import { app } from 'electron'
import * as path from 'path'

import ElectronMain from './src/main'

let watchMode: boolean = false;
const args = process.argv.slice(1);
watchMode = args.some(val => val === '--watch');
let resourcesPath: string = __dirname

if (watchMode) {
    // We can't import this because it's not built for that
    const electron_reload = require('electron-reload')
    // Enable the live reload for our electron app
    electron_reload(path.join(resourcesPath))
}

ElectronMain.main(app, resourcesPath, watchMode)

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// Or at least try and add them in the src folder