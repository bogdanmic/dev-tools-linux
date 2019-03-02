// The start of this project is from: https://github.com/electron/electron-quick-start
// Other resources:
//  - https://www.christianengvall.se/electron-packager-tutorial/
//  - https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/
// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win, watchMode;
const args = process.argv.slice(1);
watchMode = args.some(val => val === '--watch');

if (watchMode) {
    // Enable the live reload for our electron app
    const electron_reload = require('electron-reload')
    electron_reload(path.join(__dirname, "/dist"))
}

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 600,
        height: 600,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/dist/index.html"),
        protocol: 'file:',
        slashes: true
    }))

    if (watchMode) {
        // If in watchMode (developer mode) open the chromium dev tools
        win.webContents.openDevTools()
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