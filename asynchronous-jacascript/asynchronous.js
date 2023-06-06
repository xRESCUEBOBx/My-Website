//setTimeout
/*
setTimeout(() => {
  console.log("Waited one second.");
}, 1000);

//nested setTimeouts also leads to callback hell

setTimeout(() => {
  console.log(3);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(1);
    }, 1000);
  }, 1000);
}, 1000);

//Button even handler in browser javascript
const btn = 0;
btn.addEventListener(() => {});
//error first vallback fs is file reading system inside of node
FileSystem.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});

//Create a promise
const myPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});

myPromise.then(() => console.log("Success")).catch(() => console.log("Error"));
*/
