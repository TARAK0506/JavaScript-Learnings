// function doSomething() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Did something");
//         resolve("https://example.com/");
//       }, 200);
//     });
// }

// console.log(doSomething());



const githubProfile = [];

doSomething()
  .then((url) => {
    // `return` keyword now included in front of fetch call.
    console.log("url :", url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        githubProfile.push(data);
      });
  })
  .then(() => {
    console.log(githubProfile);
    // githubProfile will now contain data from fetch call.
  });


function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Did something");
      resolve("https://api.github.com/users/tarak0506");
    }, 200);
  });
}

console.log(typeof doSomething, doSomething);

// The above code defines a function `doSomething` that simulates an asynchronous operation.
// It returns a promise that resolves with a URL after a delay of 200 milliseconds.
// The `doSomething` function is called, and when the promise resolves, it fetches data from the URL.
// The fetched data is then parsed as JSON and pushed into the `listOfIngredients` array.
// Finally, the contents of `githubProfile` are logged to the console.
// Note: The URL "https://api.github.com/users/tarak0506" is a placeholder and should be replaced with a valid API endpoint.
