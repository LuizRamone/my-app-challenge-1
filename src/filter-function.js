export const replaceStringFunc = (
  stringValue,
  exceptionWords,
  symbolsToFilter
) => {
  /* so, first i have tried to go with only regex approach, to cover all the different quotes and possibilities, but in cases where
  a word with apostrophes on the beginning and in the end was provided by the function i couldn't filter it properly because a word between quotes 
  is allowed, so it would revoke the rule that words with apostrophes outside them are acceptable so, i have developed a more generic      
  function that the user provide the parameters to filter the string to the desired result,
  the first parameter is the string to be filtered, the second is an optional Array of strings to remove some desired special words that uses quotes
  at the beginning or in the end and not remove them in the final result, and the third parameter is an optional string to remove all the different quotes and symbols that the user dont want
  and the regex will remove all these occurrences
  there is a link with all the quotation marks i have found for the third parameter: (https://unicode-table.com/en/sets/quotation-marks/)*/

  //check if the string was provided
  if (!!stringValue) {
    //check if there was any symbol provided by the user
    let regexVar = !!symbolsToFilter
      ? new RegExp(`/\b(')\b|[${symbolsToFilter}]`, "g")
      : new RegExp(`/\b(')\b`, "g");

    let outputString = stringValue.replace(regexVar, "$1");
    let mapOutputString = outputString.split(" ").filter((word) => word.length); //split the string to array and filter and removes any value whose length is zero
    let index = 0;
    while (index < mapOutputString.length) {
      //check if the exception words is an string or array or if even passed as a parameter
      const tag = !!exceptionWords[index] ? exceptionWords[index] : undefined;
      //verify the phrase if it includes the exception words
      if (stringValue.includes(tag)) {
        //verifiy if any symbols were provided
        if (symbolsToFilter) {
          let indexFinded = symbolsToFilter.includes("'")
            ? mapOutputString.indexOf(tag.replace(/['"]+/g, ""))
            : mapOutputString.indexOf(tag); //find index in the words array that matches the exception word filtered with or without quotes
          mapOutputString.splice(indexFinded, 1, tag);
        }
        console.log(mapOutputString);
      }
      index++;
    }
    let result = mapOutputString.join(" ");
    return result;
  } else {
    return "You should provide a not empty/null string!";
  }
};
