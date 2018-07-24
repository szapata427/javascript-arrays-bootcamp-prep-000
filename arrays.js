var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
[element, ...array]
return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array
  array.unshift(element)
  return array.unshift(element)
}



function destructivelyAddElementToEndOfArray(array, element) {
  array
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element) {
  [array, ...element]
  return array
}

function accessElementInArray(array, index) {
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
array
array.pop()
return array
}

function removeElementFromEndOfArray(array) {
  array
  array.slice(-1)
  return array
}

