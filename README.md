# usage of the filter function

first parameter desired string to be filtered, second is an array of exceptional words with aposthophe on beggining
 or end of a word, and the third is the string to remove special character from the string to be filtered
above there is an example in the jest file: 

test("check string without aphostrophe", () => {
  expect(
    replaceStringFunc(
      `I'm 'old "new" 'on this' 'test'`,
      ["'old", "I'm"],"'")
  ).toBe(`I'm 'old "new" on this test`);
});
