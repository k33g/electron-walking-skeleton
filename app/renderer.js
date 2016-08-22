// modules pour l'envoi de messages et la construction du menu
const {ipcRenderer, remote} = require('electron');
const {Menu, MenuItem} = remote;

// définition du menu
let menuTemplate = [
  {
    label: "Application",
    submenu:[
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() { ipcRenderer.send('close-main-window'); }
      }
    ]
  }
];

let menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

riot.mount('hello-message', {message: "Hello World!"} )
