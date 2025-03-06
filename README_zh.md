# electron-pdf-window-s

在新的浏览器窗口中展示 pdf 文件

![npm](https://img.shields.io/npm/v/electron-pdf-window-s?logo=npm&style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/electron-pdf-window-s?logo=typescript&style=flat-square)
![GitHub](https://img.shields.io/github/license/Gu-Miao/electron-pdf-window-s?logo=github&style=flat-square)

简体中文 | [English](./README.md)

# 安装

使用 npm 或 yarn：

```bash
# 使用 npm
npm install electron-pdf-window-s -D

# 使用 yarn
yarn add electron-pdf-window-s -D
```

# 使用

一个最简单的例子：

```js
const { app } = require('electron')

// 使用默认导出以获得语法补全
const PDFWindow = require('electron-pdf-window-s').default

app.on('ready', () => {
  const win = new PDFWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
})
```

运行 electron，你就可以看到 pdf 了。

## `new PDFWindow(options)`

创建一个 pdf 窗口实例。选项和 [BrowserWindow](http://www.electronjs.org/zh/docs/latest/api/browser-window#class-browserwindow) 的参数一致。

然后，你就可以掉用 `loadURL()` 方法去加载一个 pdf 文件了。

## `PDFWindow.viewerPath`

静态属性，指定 pdfjs viewer 的路径。

默认值为 `path.join(__dirname, '../viewer/web/viewer.html')`。

## `PDFWindow.addSupport(browserWindow)`

静态方法，让普通的 `BrowserWindow` 实例可以通过 `loadURL()` 方法加载 pdf 文件。

# 关于 electron-pdf-window

特别感谢 [@gerhardberger](https://github.com/gerhardberger)。 本项目完全基于他的 [electron-pdf-window](https://github.com/gerhardberger/electron-pdf-window.git)。但遗憾的是，那个库似乎已经不再更新了。所以我创建了一个新的库。

## 两个库之间的差异

- pdfjs viewer 的版本
- 不再监听 `will-navigate` 和 `new-window` 事件
- 支持 Typescript

# Electron 支持

使用 `>=8.0.0` 版本的 `electron`。

# 关于 PDFJS Viewer

网站：[http://mozilla.github.io/pdf.js/](http://mozilla.github.io/pdf.js/)

版本：Stable(v2.13.216)

wiki：[Viewer options · mozilla/pdf.js Wiki](https://github.com/mozilla/pdf.js/wiki/Viewer-options)

本库对于它的改动：

- 删除了示例使用的 pdf 文件
- 解除了跨域限制（在 `viewer.js` 中删除了 `validateFileURL()` 方法）

## 支持签章？

**`不知道`是否支持**

我们曾经修改了一部分代码来支持签章特性，但在最新的版本中，我们并没有做这方面的事情。

# 许可证

[MIT 许可证](./LICENSE.txt)
