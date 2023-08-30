// function retry(fn, retries, data, successCallback, errorCallback) {
//   let result = 0;

//   function recursive() {
//     try {
//       return fn(data, successCallback, errorCallback);
//     } catch (error) {
//       if (result < retries) {
//         result++;
//         recursive();
//       }
//     }
//   }

//   recursive();
// }

function retryWithDelay(
  asyncFn,
  retries = 3,
  delay = 50,
  finalError = "Failed"
) {
  let result = 0;

  function recursive(resolve, reject) {
    asyncFn()
      .then((data) => {
        // console.log(data);
        resolve(data);
      })
      .catch(() => {
        if (result < retries) {
          result++;
          setTimeout(() => recursive(resolve, reject), delay);
        } else {
          //   console.log(finalError);
          reject(finalError);
        }
      });
  }

  return new Promise((resolve, reject) => recursive(resolve, reject));
}

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

// Print the result
test().catch(console.log);
