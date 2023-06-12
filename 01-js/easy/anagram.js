const readline = require('readline');

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  } else {
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');

    str1Arr.sort();
    str2Arr.sort();

    const sortedStr1 = str1Arr.join('');
    const sortedStr2 = str2Arr.join('');

    return sortedStr1 === sortedStr2;
  }
}

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read user input and invoke the isAnagram function
rl.question("Enter string 1: ", function (str1) {
  rl.question("Enter string 2: ", function (str2) {
    const result = isAnagram(str1, str2);
    console.log(result);
    rl.close();
  });
});
