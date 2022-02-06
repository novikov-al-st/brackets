module.exports = function check(str, bracketsConfig) {
  let openBracketsDictionary = [];
  let closeBracketsDictionary = [];
  let closeBrackets = [];

  bracketsConfig.forEach(arr => {
    openBracketsDictionary.push(arr[0]);
    closeBracketsDictionary.push(arr[1]);
  });

  for (let i = 0; i < str.length; i++) {
        let lastCloseBracket = closeBrackets[closeBrackets.length -1];

        if(str[i] === lastCloseBracket)
        {
          closeBrackets.pop();
          continue;
        }

        if(openBracketsDictionary.includes(str[i]))
        {
          closeBrackets.push(closeBracketsDictionary[openBracketsDictionary.indexOf(str[i])]);
        } 
        else {
          return false;
        }
  }
  return closeBrackets.length === 0;
}