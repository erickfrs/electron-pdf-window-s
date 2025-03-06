const { app, BrowserWindow } = require('electron')
const PDFWindow = require('..').default
const path = require('path')

app.on('ready', () => {
  const win = new PDFWindow({
    width: 800,
    height: 600
  })

  const win2 = new BrowserWindow({
    width: 800,
    height: 600
  })

  PDFWindow.addSupport(win2)

  win.loadURL('http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
  // win.loadURL(`file://${path.join(__dirname, 'helloworld.pdf')}`)

  // win2.loadURL('http://www.baidu.com/')
  win2.loadURL(`file://${path.join(__dirname, 'helloworld.pdf')}`)
})
