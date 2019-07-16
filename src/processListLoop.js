import {updateListEvent} from "./processListStore";

const { ipcRenderer } = window.require('electron');

ipcRenderer.on('request-tasklist-reply', (_, arg) => {
    updateListEvent(arg)
});

setInterval(() => {
    ipcRenderer.send('request-tasklist-message')
}, 1000);
