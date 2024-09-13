'use strict'
const electron = require('electron')
const window = require('./window')

require('events').EventEmitter.prototype._maxListeners = 100;

const app = electron.app

let mainWindow;

function onClosed() {
    mainWindow = null
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (!mainWindow) {
        mainWindow = window(onClosed)
    }
})

app.on('ready', () => {
    mainWindow = window(onClosed)
})