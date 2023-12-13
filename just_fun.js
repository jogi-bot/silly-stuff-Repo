const nemo = ["nemo"];

function findNemo(array) {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found nemo");
    }
  }
  let t1 = performance.now();
  console.log("total time spend", t1 - t0);
}
findNemo(nemo);

//found nemo
//total time spend 3.202099997550249



const nemo = ["nemo"];
const large = new Array(20).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found nemo");
    }
  }
  let t1 = performance.now();
  console.log("total time spend", t1 - t0);
}
findNemo(large);

// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// found nemo
// total time spend 18.416372999548912


function foo() {
  setTimeout(() => {
    console.log("kem cho");
  }, 1000);
}
async function main() {
  await foo();
  //console.log(person);
  console.log("hii");
}
main();


// //output : -
// //hii
// //kem cho

function foo()  {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("kem bapu");
      res();
    }, 1000);
  });
}

async function main() {
  await foo();
  console.log("majama");
}
main();


// //output : -
// //kem bapu
// //majama