// The start of this project is from: https://github.com/electron/electron-quick-start
// Other resources:
//  - https://www.christianengvall.se/electron-packager-tutorial/
//  - https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/
// Modules to control application life and create native browser window
import { app, BrowserWindow, screen } from 'electron'
import * as path from 'path'
import * as  url from 'url'

let win: BrowserWindow | null = null;
let watchMode: boolean = false;
const args = process.argv.slice(1);
watchMode = args.some(val => val === '--watch');

if (watchMode) {
    // We can't import this because it's not built for that
    const electron_reload = require('electron-reload')
    // Enable the live reload for our electron app
    electron_reload(path.join(__dirname))
}

function createWindow(): void {
    // Create the browser window. Depending on the environment we use.
    // It's nice to have it full screen when developing but on prod it might be
    // to be a little bit smaller
    let windowOptions: any = {
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        }
    }
    if (watchMode) {
        windowOptions.x = 0
        windowOptions.y = 0
        // Compute the full screen size
        const size = screen.getPrimaryDisplay().workAreaSize;
        windowOptions.width = size.width;
        windowOptions.height = size.height;
    } else {
        windowOptions.width = 800;
        windowOptions.height = 600;
    }
    win = new BrowserWindow(windowOptions)

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/index.html"),
        protocol: 'file:',
        slashes: true
    }))

    if (watchMode) {
        // If in watchMode (developer mode) open the chromium dev tools
        win.webContents.openDevTools()
        // It works here as well if we are in devMode = watchMode
        // Run the following from the Console tab of your app's DevTools
        const devTron = require('devtron')
        devTron.install()
        // You should now see a Devtron tab added to the DevTools
    }
    win.on('ready-to-show', () => {
        if (win !== null) {
            win.show()
        }
    })

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.