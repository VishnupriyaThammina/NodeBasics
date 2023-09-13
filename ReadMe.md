#BASICS OF NODE JS
'Using back ticks with ${} in js helps us in accessing the const or vars ' 
'Usage of functions'


//The global object in node
in browser window object is the browsers global object
not required to say window.setTimeout
we can do it directly 
setTimeout
console.log(global)

<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 123.24420002102852,
      nodeStart: 11.968000024557114,
      v8Start: 22.554200023412704,
      bootstrapComplete: 93.09670001268387,
      environment: 45.31520000100136,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1694607032558.68
  },
  fetch: [AsyncFunction: fetch]
}

console.log(__dirname);
console.log(__filename);

Logging the full absolute path of the directory and file names 

global object is different from window object
you cant work with document objects
it is not in the global object
but is present in window object

module export import is done with key word require

File system has built in module which should be imported 
fs [readFile, writeFile, existsSync, unlink]
all of these are asyn functiosn so they take a callback function as a a parameter which can be called after the completion of the exceution of the particular code to know if it is a error or it executed welll 

now lets  understand streams and buffers

STREAMS
Start using data before it is fully been read
just like real life streams
water coming from the tank can be accesssed evn if it is half filled just like that we can use streams in js
{data} =>[fillingmanychunks]=== [sendingchunk1] = [chunk2] =[chunk3] ==== [browser]