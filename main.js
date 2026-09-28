const { app, BrowserWindow } = require('electron');
const path = require('path');

// Keep Chromium/Electron diagnostics visible in the terminal launched by `npm start`.
app.commandLine.appendSwitch('enable-logging');

function timestamp() {
  return new Date().toISOString();
}

function log(prefix, ...args) {
  console.log(`[${timestamp()}] ${prefix}`, ...args);
}

process.on('uncaughtException', (error) => {
  console.error(`[${timestamp()}] [MAIN UNCAUGHT EXCEPTION]`, error?.stack || error);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[${timestamp()}] [MAIN UNHANDLED REJECTION]`, reason?.stack || reason);
});

function createWindow() {
  log('[MAIN]', `Electron ${process.versions.electron}`, `Chromium ${process.versions.chrome}`, `Node ${process.versions.node}`);

  const win = new BrowserWindow({
    width: 1320,
    height: 980,
    minWidth: 560,
    minHeight: 640,
    backgroundColor: '#030712',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  const wc = win.webContents;

  // The game never opens windows or navigates away from index.html.
  wc.setWindowOpenHandler(() => ({ action: 'deny' }));
  wc.on('will-navigate', (event, url) => {
    if (url !== wc.getURL()) {
      event.preventDefault();
      console.warn(`[${timestamp()}] [MAIN] blocked navigation to ${url}`);
    }
  });

  // Current Electron passes the details on the event object itself; Electron
  // 35-38 also passed them as a second argument; older builds used positional
  // arguments. Handle all three.
  wc.on('console-message', (...args) => {
    let level = 'info';
    let message = '';
    let line = '';
    let source = '';

    const details = args.find(arg => arg && typeof arg === 'object' && typeof arg.message === 'string');
    if (details) {
      level = details.level || 'info';
      message = details.message || '';
      line = details.lineNumber ? `:${details.lineNumber}` : '';
      source = details.sourceId || '';
    } else {
      const [, legacyLevel, legacyMessage, legacyLine, legacySource] = args;
      const legacyNames = ['verbose', 'info', 'warning', 'error'];
      level = legacyNames[legacyLevel] || String(legacyLevel ?? 'info');
      message = legacyMessage || '';
      line = legacyLine ? `:${legacyLine}` : '';
      source = legacySource || '';
    }

    const location = source ? ` (${source}${line})` : '';
    const output = `[${timestamp()}] [RENDERER ${String(level).toUpperCase()}] ${message}${location}`;
    if (String(level).toLowerCase().includes('error')) console.error(output);
    else if (String(level).toLowerCase().includes('warn')) console.warn(output);
    else console.log(output);
  });

  wc.on('render-process-gone', (_event, details) => {
    console.error(`[${timestamp()}] [RENDERER GONE] reason=${details.reason} exitCode=${details.exitCode}`);
  });

  wc.on('unresponsive', () => {
    console.error(`[${timestamp()}] [RENDERER UNRESPONSIVE]`);
  });

  wc.on('responsive', () => {
    log('[RENDERER RESPONSIVE]');
  });

  wc.on('did-fail-load', (_event, errorCode, errorDescription, validatedURL, isMainFrame) => {
    console.error(`[${timestamp()}] [LOAD ERROR] code=${errorCode} description=${errorDescription} mainFrame=${isMainFrame} url=${validatedURL}`);
  });

  wc.on('did-finish-load', () => {
    log('[MAIN]', 'Renderer finished loading. Runtime errors will be echoed here.');
  });

  win.on('closed', () => log('[MAIN]', 'Game window closed.'));
  win.loadFile(path.join(__dirname, 'index.html')).catch((error) => {
    console.error(`[${timestamp()}] [LOAD PROMISE ERROR]`, error?.stack || error);
  });
}

app.whenReady().then(() => {
  log('[MAIN]', 'App ready.');
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
