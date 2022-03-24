# Installation
I had some trouble with eslint version i dont know if is a Windows problem but both my projects needed in order to install the dependencies with yarn add the flag (yarn install --ignore-engines) to stop the version conflict issue

# Jest
my jest was not installed globally so, i run my tests with (node_modules/.bin/jest) instead

# usage of the filter function

first parameter is the desired string to be filtered, second is an array of exceptional words with aposthophe on beggining
 or end of a word, and the third is the string to remove special character from the string to be filtered
above there is an example in the jest file: 

test("check string without aphostrophe", () => {
  expect(
    replaceStringFunc(
      `I'm 'old "new" 'on this' 'test'`,
      ["'old", "I'm"],"'")
  ).toBe(`I'm 'old "new" on this test`);
});

test("check array of exceptional words", () => {
  expect(
    replaceStringFunc(
      "I'm 'old new on this busineesull 'test'",
      ["'old", "I'm"],
      "`'«‹›»„“‟”’❝❞❮❯⹂〝〞〞〟＂‚‘‛❛❜❟"
    )
  ).toBe("I'm 'old new on this busineesull test");
