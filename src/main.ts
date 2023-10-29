const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be'
        },
        titleBarStyle: 'hidden'
    })

    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

console.log('Hello World!!');