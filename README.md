# dev-tools-linux
This is an Electron app that allows you to install and setup your Ubuntu development machine.

### Requirements
- [Node](https://nodejs.org/en/)
- [Angular](https://angular.io/)
- [Electron](https://electronjs.org/)
- [Electron packager](https://github.com/electron-userland/electron-packager)

### Commands
```bash
# Start the angular app in the browser
$ npm run start
# Start the electron app
$ npm run electron:build
# Package the app for Linux
$ npm run package-linux
```

### Development
The app is splint in two directories:
- **electron** - the electron app files
- **src** -  the angular app files

To start the app for development you will need to open two terminals.
```bash
# In the first terminal run the angular app in watch mode
$ npm run angular:watch
# In the second terminal run the electron app in watch mode
$ npm run electron:watch
```

### Resources
- [Setting up a basic electron app](https://github.com/electron/electron-quick-start)
- [Add angular to an electron app](https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/)
- [How to package the electron app for different platforms](https://www.christianengvall.se/electron-packager-tutorial/)
- [How to expose electron services in angular](https://github.com/ThorstenHans/ngx-electron/blob/master/projects/ngx-electron/src/lib/electron.service.ts)
- [Ultra-fast bootstrapping with Angular 7 and Electron 4](https://www.maximegris.fr/angular-electron/)
- [Electron reload on changes](https://www.npmjs.com/package/electron-reload)
- [How to bundle your app](https://github.com/electron-userland/electron-packager)
- [Deep dive into Electron’s main and renderer processes](https://medium.com/cameron-nokes/deep-dive-into-electrons-main-and-renderer-processes-7a9599d5c9e2)
- [Dev tools extension](https://electronjs.org/devtron)
- [Angular and electron ipc communication](https://malcoded.com/posts/angular-desktop-electron)