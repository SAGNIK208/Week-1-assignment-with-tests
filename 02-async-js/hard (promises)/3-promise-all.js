/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getSeconds());
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getSeconds());
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getSeconds());
    }, 3000);
  });
}

function calculateTime() {
  let startTime = new Date().getSeconds();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (time) => {
      console.log(time);
      let endTime = new Date().getSeconds();
      console.log(endTime - startTime);
    }
  );
  
  
}

calculateTime();
