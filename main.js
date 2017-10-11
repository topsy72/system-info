const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//init win
let win; 


function createWindow(){

	//create browser window
	win = new BrowserWindow({width:1024, height:768, icon:__dirname+'/img/50.png'});

	//load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	//open devtools
	win.webContents.openDevTools();


	//set win to no

	win.on('closed', () => {
		win=null;

	});

}
//Run create window funciton
app.on('ready', createWindow);

//quit when all windows are closed
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	}


});