const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app

app.on('ready', function() {
    let window = new BrowserWindow()
    window.loadURL('http://google.com')
})