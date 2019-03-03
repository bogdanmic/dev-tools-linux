import { BrowserWindow, screen, ipcMain } from 'electron';
import * as path from 'path'
import * as  url from 'url'
import * as child from 'child_process'
export default class ElectronMain {
    private static win: Electron.BrowserWindow | null;
    private static app: Electron.App;
    private static isDev: boolean = false;
    private static resourcesPath: string;

    // The default options with which we create the window
    private static windowOptions: any = {
        width: 800,
        height: 600,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        }
    }

    // Quit when all windows are closed.
    private static onWindowAllClosed(): void {
        // On macOS it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            ElectronMain.app.quit();
        }
    }

    private static onReady(): void {
        ElectronMain.createWindow()
    }

    private static onActivate(): void {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (ElectronMain.win === null) {
            ElectronMain.createWindow()
        }
    }

    static main(app: Electron.App, resourcesPath: string, isDev: boolean): void {
        ElectronMain.app = app
        ElectronMain.isDev = isDev
        ElectronMain.resourcesPath = resourcesPath

        // This method will be called when Electron has finished
        // initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        ElectronMain.app.on('ready', ElectronMain.onReady)
        // Quit when all windows are closed.
        ElectronMain.app.on('window-all-closed', ElectronMain.onWindowAllClosed)

        ElectronMain.app.on('activate', ElectronMain.onActivate)

        // TODO: This should be moved somewhere else
        ipcMain.on('do-something', (event: any) => {
            console.log("do-something")
            child.exec('echo "I just did something! `date`" >> lol.txt')
            event.sender.send('do-something', 'jakieś dane');

            const lol = child.spawn('pwd');
            process.stdin.pipe(lol.stdin)
            lol.stdout.on('data', (data) => {
                console.log(` - child stdout:\n\t${data}`);
            });
        });
    }

    private static createWindow(): void {
        // Create the browser window. Depending on the environment we use.
        // It's nice to have it full screen when developing but on prod it might be
        // to be a little bit smaller
        if (ElectronMain.isDev) {
            ElectronMain.windowOptions.x = 0
            ElectronMain.windowOptions.y = 0
            // Compute the full screen size
            const size = screen.getPrimaryDisplay().workAreaSize;
            ElectronMain.windowOptions.width = size.width;
            ElectronMain.windowOptions.height = size.height;
        }
        ElectronMain.win = new BrowserWindow(ElectronMain.windowOptions)

        // and load the index.html of the app.
        ElectronMain.win.loadURL(url.format({
            pathname: path.join(ElectronMain.resourcesPath, "/index.html"),
            protocol: 'file:',
            slashes: true
        }))

        if (ElectronMain.isDev) {
            // If in watchMode (developer mode) open the chromium dev tools
            ElectronMain.win.webContents.openDevTools()
            // It works here as well if we are in devMode = watchMode
            // Run the following from the Console tab of your app's DevTools
            const devTron = require('devtron')
            devTron.install()
            // You should now see a Devtron tab added to the DevTools
        }
        ElectronMain.win.on('ready-to-show', ElectronMain.onReadyToShow)

        // Emitted when the window is closed.
        ElectronMain.win.on('closed', ElectronMain.onClosed)
    }

    private static onReadyToShow(): void {
        // Shows the window when ready to remove flickers.
        if (ElectronMain.win !== null) {
            ElectronMain.win.show()
        }
    }

    // Emitted when the window is closed.
    private static onClosed(): void {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        ElectronMain.win = null
    }
}
