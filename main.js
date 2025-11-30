const { app, BrowserWindow } = require('electron');

app
  .whenReady()
  .then(() => {
    console.log('App is ready');
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  })
  .catch((error) => {
    console.log(error);
  });
