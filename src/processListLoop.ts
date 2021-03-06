import { killProcessEvent, updateListEvent } from "./processListStore";

// @ts-ignore
const { ipcRenderer } = window.require("electron");

ipcRenderer.on("request-tasklist-reply", (_, arg) => {
	updateListEvent(arg);
});

setInterval(() => {
	ipcRenderer.send("request-tasklist-message");
}, 1000);

killProcessEvent.watch(pid => {
	ipcRenderer.send("kill-process", pid);
});
