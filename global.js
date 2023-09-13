// console.log(global);

global.setTimeout(()=>{
    console.log("time out is set for 0.1 seconds");
},100);// dont have to exp;icitly do global

setTimeout(()=>{
    console.log("time out is set for 0.1 seconds without expliccit declaration of global");
},100);

const int = setInterval(() =>{
    console.log("run every second , i have to cancel this with cntrl c");
},100)

setTimeout(()=>{
    console.log("here i am  clearing the interval after 1 second");
clearInterval(int)
},1000);

console.log(__dirname);
console.log(__filename);



