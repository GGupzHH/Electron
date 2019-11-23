const { app, BrowserWindow } = require('electron')

function createElectron () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}

app.on('ready', createElectron)