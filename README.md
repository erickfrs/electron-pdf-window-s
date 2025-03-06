# electron-pdf-window-s

View pdf in new browser windows.

![npm](https://img.shields.io/npm/v/electron-pdf-window-s?logo=npm&style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/electron-pdf-window-s?logo=typescript&style=flat-square)
![GitHub](https://img.shields.io/github/license/Gu-Miao/electron-pdf-window-s?logo=github&style=flat-square)

English | [简体中文](./README_zh.md)

# Install

Use npm or yarn:

```bash
# Use npm
npm install electron-pdf-window-s -D

# Use yarn
yarn add electron-pdf-window-s -D
```

# Usage

A simple example:

```js
const { app } = require('electron')

// Use defualt export so you could get intelligent completion
const PDFWindow = require('electron-pdf-window-s').default

app.on('ready', () => {
  const win = new PDFWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
})
```

You will see pdf window is show.

## `new PDFWindow(options)`

Create a pdf window instance. The option is same as [BrowserWindow](http://www.electronjs.org/docs/latest/api/browser-window)'s option.

Then, you could use `loadURL()` to load a PDF file or url.

## `PDFWindow.viewerPath`

Static property, specifies path for the pdfjs viewer.

Default is `path.join(__dirname, '../viewer/web/viewer.html')`

## `PDFWindow.addSupport(browserWindow)`

Static method, enable normal BrowserWindow to support loading pdf by `loadURL()`.

# About electron-pdf-window

Special thanks to [@gerhardberger](https://github.com/gerhardberger). This project is based on his [electron-pdf-window](https://github.com/gerhardberger/electron-pdf-window.git). But unfortunately, that library no longer seems to be maintained. So I froked it and created new one.

## Differences between them

- Version of pdfjs viewer
- No listeners of `will-navigate` and `new-window` events anymore.
- Typescript support

# Electron Support

At least `>=8.0.0` version.

# About PDFJS Viewer

Website: [http://mozilla.github.io/pdf.js/](http://mozilla.github.io/pdf.js/)

Version: Stable(v2.13.216)

Options wiki: [Viewer options · mozilla/pdf.js Wiki](https://github.com/mozilla/pdf.js/wiki/Viewer-options)

Changes in this library:

- Remove exmpale pdf file.
- Remove cross origin limit(Delete `validateFileURL()` function in `viewer.js`).

## Support signature?

**Now is `unknown`**

We have modify some code to support signature feature. But we didn't do that in the latest version.

# LICENSE

[MIT LICENSE](./LICENSE.txt)
