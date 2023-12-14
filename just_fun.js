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


function Travel(arr1) {

return   arr1.reduce((acc , itr) => {
     return acc + itr
 },0)

 
}
const arr1 = [1, 2, 3, 4, 5];
console.log(Travel(arr1))

// //15


const Nemo = new  Array(11).fill('nemo')

function findNemo(array) {
  
  for (let i = 0; i < array.length; i++){
    console.log(`loop running`);
    if (array[i] === 'nemo') {
      console.log('we found-nemo');
      break
      }
  }
 
}
findNemo(Nemo)

//loop running
// we found-nemo

const arr1 = ['a', 'b', 'c', 'd']

function krunal(arr1) {
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr1.length; j++) {
            console.log(arr1[i],arr1[j]);
        }
    }

}

krunal(arr1)

// a a
// a b
// a c
// a d
// b a
// b b
// b c
// b d
// c a
// c b
// c c
// c d
// d a
// d b
// d c
// d d

arr1 = [1,2,3,4]
function printNUmbersWithSum(arr1) {
    arr1.forEach(element => {
        console.log(`these all are numbers ${ element }`);
    });

    arr1.forEach(function (first) {
        arr1.forEach(function (second) {
             console.log(first + second);
        })
    })
    
}
printNUmbersWithSum(arr1)

// these all are numbers 1
// these all are numbers 2
// these all are numbers 3
// these all are numbers 4
// 2
// 3
// 4
// 5
// 3
// 4
// 5
// 6
// 4
// 5
// 6
// 7
// 5
// 6
// 7
// 8