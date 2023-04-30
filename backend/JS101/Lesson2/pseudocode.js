/*START

GET first number = from user
GET second number = from user

SET output = sum of two numbers

PRINT output

END*/


/*START

GIVEN an array of strings

SET indexPosition = 0 to start of array
SET outputString = all strings added together

WHILE iterator < length of given array
  SET outputString = outputString + current string in array at indexPosition
  SET indexPosition = indexPosition + 1

PRINT outputString

END*/


/*START

GIVEN an array of integers

SET outputArray = collection of every other integer in given array
SET indexPosition = 0 to start of array

WHILE iterator < length of given array
  SET outputArray = outputArray appended with number in array at indexPosition
  SET indexPosition = indexPosition + 2 for every other element

PRINT outputArray

END*/


/*START
GIVEN a string called string
GIVEN a character to search in string called givenChar

SET repeatChar = null

SET count = 0
SET indexPosition = 0 for start of string

WHILE indexPosition < length of string
  SET currentChar = character at current indexPosition of string
  IF currentChar === givenChar
    count = count + 1
  IF count === 3
    repeatChar = currentChar

PRINT repeatChar

END*/


/*START
GIVEN first array of numbers called firstArray
GIVEN second array of numbers called secondArray

SET outArray = []
SET indexPosition = 0 for start of array

WHILE indexPosition < length of either array
  SET outArray[next index] = firstArray[indexPosition]
  SET outArray[next index] = secondArray[indexPosition]
  indexPosition = indexPosition + 1

print outArray

END*/

