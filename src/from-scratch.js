const myForEach = (arr, callbackFunc) => {
  for (let element of arr) {
    callbackFunc(element);
  }

  return;
};

// tests

// const myNames1 = ["Alice", "Bob", "Charlie", "Debbie"];
// const result1 = myForEach(myNames1, (name) => console.log(`Hi, ${name}!`));
// /* That will log */
// // Hi, Alice!
// // Hi, Bob!
// // Hi, Charlie!
// // Hi, Debbie!

// console.log(result1); // undefined
// console.log(myNames1); // ['Alice', 'Bob', 'Charlie', 'Debbie']

const myMap = (arr, callbackFunc) => {
  returnArray = [];
  for (let element of arr) {
    returnArray.push(callbackFunc(element));
  }

  return returnArray;
};

// tests

// const myNums2 = [1, 4, 9, 16];

// // Pass a function to map
// const myDoubledNums2 = myMap(myNums2, (x) => x * 2);

// console.log(myDoubledNums2);
// // expected output: [2, 8, 18, 32]
// console.log(myNums2);
// // expected output: [1, 4, 9, 16] unaffected!

const myFind = (arr, callbackFunc) => {
  for (let element of arr) {
    if (callbackFunc(element)) {
      return element;
    }
  }
  return;
};

// tests

// const myNames3 = ["Alice", "Bob", "Charlie", "Debbie", "Barry"];
// const nameHasB3 = myFind(myNames3, (name) => name.includes("B"));
// console.log(nameHasB3); // 'Bob' not 'Barry' because 'Bob' is first

// const nameHasZ3 = myFind(myNames3, (name) => name.includes("Z"));
// console.log(nameHasZ3); // undefined

// const nums3 = [0, 1, 4, 6];
// console.log(myFind(nums3, (num) => num % 2));

const myFilter = (arr, callbackFunc) => {
  returnArray = [];
  for (let element of arr) {
    if (callbackFunc(element)) {
      returnArray.push(element);
    }
  }
  return returnArray;
};

// const myNames4 = ["Alice", "Bob", "Charlie", "Debbie", "Barry"];
// const namesWithB4 = myFilter(myNames4, (name) => name.includes("B"));
// console.log(namesWithB4); // ['Bob', 'Barry']

// const namesWithZ4 = myFilter(myNames4, (name) => name.includes("Z"));
// console.log(namesWithZ4); // []

const sortWords = (arr) => {
  let sortingArr = [...arr];
  // console.log(sortingArr);
  sortingArr.sort();
  // console.log(sortingArr);
  return sortingArr;
};

// tests

// const unsortedNames = ["Charlie", "Debbie", "Alice", "Bob"];
// const sortedNames = sortWords(unsortedNames);

// console.log(sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']
// console.log(unsortedNames); // ['Charlie', 'Debbie', 'Alice', 'Bob']

const sortNumbers = (arr) => {
  let sortingArr = [...arr];
  sortingArr.sort((a, b) => a - b);
  return sortingArr;
};

// tests

// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const sortedNums = sortNumbers(unsortedNums);

// console.log(sortedNums); // [1, 2, 3, 11, 14, 100]
// console.log(unsortedNums); // [1, 100, 14, 3, 2, 11]

const sortNumbersBetter = (arr, isDescending) => {
  let sortingArr = [...arr];
  if (isDescending) {
    sortingArr.sort((a, b) => b - a);
  } else {
    sortingArr.sort((a, b) => a - b);
  }
  return sortingArr;
};

// tests

// const unsortedNums = [1, 100, 14, 3, 2, 11];
// const bigToSmall = sortNumbersBetter(unsortedNums, true);
// console.log(bigToSmall); // [100, 14, 11, 3, 2, 1]

// const smallToBig = sortNumbersBetter(unsortedNums); // default param
// console.log(smallToBig); // [1, 2, 3, 11, 14, 100]

const sortUsersByOrder = (arr) => {
  let sortingArr = [...structuredClone(arr)];
  sortingArr.sort((a, b) => a.order - b.order);
  return sortingArr;
};

// tests

const users = [
  { name: "Alice", order: 1 },
  { name: "Bob", order: 3 },
  { name: "Charlie", order: 2 },
  { name: "Debbie", order: 4 },
];

const sortedUsers = sortUsersByOrder(users);
// console.log(sortedUsers);
// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]

const sortUsersByName = (arr) => {
  let sortingArr = [...structuredClone(arr)];
  // i did NOT cheat with ChatGPT

  // i cheated with MDN documentation :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
  sortingArr.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return sortingArr;
};

// tests

const resortedUsers = sortUsersByName(sortedUsers);
console.log(resortedUsers);
// [
//   { name: "Alice", order: 1 },
//   { name: "Bob", order: 3 },
//   { name: "Charlie", order: 2 },
//   { name: "Debbie", order: 4 },
// ];

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
