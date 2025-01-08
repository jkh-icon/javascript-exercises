const removeFromArray = function(array, ...args) {

    remove = []
    for (let i = 0; i < arguments.length - 1; i++) {
        let index = array.indexOf(args[i]);
        while (index !== -1) {
            remove.push(index);
            index = array.indexOf(args[i], index + 1);
        };
    };
    remove.sort(function(a, b){return a-b}) // sorting numerical values instead of string
    console.log(remove)
     for (let j = remove.length -1; j >= 0; j--) {
        array.splice(remove[j], 1);
        
     }
  
    return array;
};
console.log(removeFromArray([1,2,3,4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;


// When you remove an element from an array, all elements after the removed element shift one index to the left. If you remove elements while iterating from the beginning to the end, the shifting can cause the loop to skip over elements or remove the wrong elements.

// By iterating backward, you remove elements starting from the highest indices, so the removal of one element doesn't affect the positions of the elements that you have yet to process.
