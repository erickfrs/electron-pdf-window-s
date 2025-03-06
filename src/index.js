const electron = require('electron')
const readChunk = require('read-chunk')
const got = require('got')
const path = require('path')

const { BrowserWindow } = electron

const PDF_VIEWER_PATH = path.join(__dirname, '../viewer/web/viewer.html')

function isAlreadyLoadedWithPdfJs(url) {
  return url.startsWith(`file://${PDFWindow.viewerPath}?file=`)
}

function isFile(url) {
  return url.match(/^file:\/\//i)
}

function isPDFMime(url) {
  const filePath = url.replace(/^file:\/\//i, '')
  const buffer = readChunk.sync(filePath, 0, 262)

  return buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46
}

function hasPdfExtension(url) {
  return url.match(/\.pdf$/i)
}

const isPDF = asyncWrapper(url => {
  return new Promise(async (resolve, reject) => {
    if (isAlreadyLoadedWithPdfJs(url)) {
      resolve(false)
    } else if (isFile(url)) {
      resolve(isPDFMime(url))
    } else if (hasPdfExtension(url)) {
      resolve(true)
    } else {
      const [err, res] = await asyncWrapper(got.head)(url)
      if (err) reject(err)
      const { headers } = res
      if (headers.location) {
        const [err, isIt] = await isPDF(headers.location)
        if (err) reject(err)
        resolve(isIt)
      }
      resolve(res.headers['content-type'].includes('application/pdf'))
    }
  })
})

function asyncWrapper(fn) {
  return async (...args) => {
    try {
      const res = await fn.call(this, ...args)
      return [null, res]
    } catch (err) {
      return [err, null]
    }
  }
}

class PDFWindow extends BrowserWindow {
  constructor(options) {
    super(options)
  }

  static viewerPath = PDF_VIEWER_PATH

  static addSupport(browserWindow) {
    const { loadURL } = browserWindow
    browserWindow.loadURL = async (url, options) => {
      const [err, isIt] = await isPDF(url)
      if (err || !isIt) {
        loadURL.call(browserWindow, url, options)
        return
      }

      loadURL.call(
        browserWindow,
        `file://${PDFWindow.viewerPath}?file=${decodeURIComponent(url)}`,
        options
      )
    }
  }

  async loadURL(url, options) {
    const [err, isIt] = await isPDF(url)
    if (err || !isIt) {
      super.loadURL(url, options)
      return
    }

    super.loadURL(`file://${PDFWindow.viewerPath}?file=${decodeURIComponent(url)}`, options)
  }
}

export default PDFWindow
