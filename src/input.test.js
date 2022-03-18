import { replaceStringFunc } from "./filter-function";
/* i was not able to run jest command in my terminal directly so, i have searched for a replacer and i found
 this command to run the tests (node_modules/.bin/jest) 
 reminder: first parameter desired string to be filtered, second is an array of exceptional words with aposthophe on beggining
 or end of a word, and the third is the string to remove special character from the string to be filtered
 */

 test("check string", () => {
  expect(
    replaceStringFunc(
      `I'm 'old "new" on this business 'test'`,
      ["'old", "I'm"],undefined)
  ).toBe(`I'm 'old "new" on this business 'test'`);
});

test("check string without aphostrophe", () => {
  expect(
    replaceStringFunc(
      `I'm 'old "new" 'on this' 'test'`,
      ["'old", "I'm"],"'")
  ).toBe(`I'm 'old "new" on this test`);
});

test("string empty/null", () => {
  expect(replaceStringFunc("", [""], null)).toBe(
    "You should provide a not empty/null string!"
  );
});

test("string null", () => {
  expect(replaceStringFunc(null, null, null)).toBe(
    "You should provide a not empty/null string!"
  );
});

test("remove quote `", () => {
  expect(replaceStringFunc("``very ol' teste", ["ol'"], "`")).toBe(
    "very ol' teste"
  );
});

test("check guillemets", () => {
  expect(replaceStringFunc("«You've done the right thing!»", [""], "«»")).toBe(
    "You've done the right thing!"
  );
});

test("check a lot of different quotes", () => {
  expect(
    replaceStringFunc(
      "`«‹›»„“‟”’❝❞❮❯⹂〝〞〞〟＂‚‘‛❛❜❟I'm testing a lot of different quotes!»",
      [""],
      "`«‹›»„“‟”’❝❞❮❯⹂〝〞〞〟＂‚‘‛❛❜❟"
    )
  ).toBe("I'm testing a lot of different quotes!");
});

test("check array of exceptional words", () => {
  expect(
    replaceStringFunc(
      "I'm 'old new on this busineesull 'test'",
      ["'old", "I'm"],
      "`'«‹›»„“‟”’❝❞❮❯⹂〝〞〞〟＂‚‘‛❛❜❟"
    )
  ).toBe("I'm 'old new on this busineesull test");
});


