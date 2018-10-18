const electron = typeof process !== 'undefined' && process.versions && !!process.versions.electron;

var printer = require("node-thermal-printer");
printer.init({
  type: 'epson',
  interface: 'printer:My Printer',
  driver: require(electron ? 'electron-printer' : 'printer')
});

printer.printImage('./assets/olaii-logo-black-small.png', function(done){
  printer.cut();
  printer.execute();
});
