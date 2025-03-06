import { BrowserWindow, BrowserWindowConstructorOptions, LoadURLOptions } from 'electron'

export default class PDFWindow extends BrowserWindow {
  /**
   * PDFWindow
   *
   * @param options Initial options, same as {@link Electron.BrowserWindow}
   */
  constructor(options?: BrowserWindowConstructorOptions)

  /**
   * Path of pdfjs viwer
   */
  static viewerPath: string

  /**
   * Add PDF Support for BrowserWindow
   *
   * @param browserWindow Instance of BrowserWindow
   */
  static addSupport(browserWindow: BrowserWindow): void

  /**
   * the promise will resolve when the page has finished loading (see
   * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
   *
   * Same as `webContents.loadURL(url[, options])`.
   *
   * The `url` can be a remote address (e.g. `http://`) or a path to a local HTML
   * file using the `file://` protocol.
   *
   * To ensure that file URLs are properly formatted, it is recommended to use Node's
   * `url.format` method:
   *
   * You can load a URL using a `POST` request with URL-encoded data by doing the
   * following:
   *
   * @param url Page or PDF url
   * @param options Options, same as {@link Electron.LoadURLOptions}
   */
  loadURL(url: string, options?: LoadURLOptions): Promise<void>
}
