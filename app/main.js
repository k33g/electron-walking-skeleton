const {app, ipcMain, BrowserWindow} = require('electron');

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {

  })
});

ipcMain.on('close-main-window', (event, arg) => {
  app.quit();
});
