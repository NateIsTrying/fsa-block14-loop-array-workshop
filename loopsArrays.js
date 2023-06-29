// Only Odds
//Create 2 stored arrays: array and newArray
const array = [70, 42, 55, 81, 21, 91, 34] 
const newArray = []
// use standard 'for' loop
for(let i =0; i < array.length; i++){
    // use 'if' condition
    if(array[i] % 2 === 1){// within 'if' use modulo
        newArray.push(array[i]);
    }
}

// alert(newArray);


// Vowel versus Consonants
const word = `onomonopia`.toLowerCase(); //toLowerCase to check if lowercase word put in.
// console.log(word);
let vowelCount = 0;
let consoCount = 0;
// create for loop
for(let i = 0; i < word.length; i++){
    if(word[i] === 'a'|| word[i] === 'e'|| word[i] === 'i'|| word[i] === 'o'|| word[i] === 'u'){// within the loop, create an if statement
    // in the if condition put every vowel with the || pipe to count when any vowel is used.
        vowelCount += 1;
    } else { // put else for all consonants
        consoCount += 1
    }
}

// alert the result
// alert(`${word} has ${consoCount} consonants and ${vowelCount} vowels.`);


// Reverse Array
// create arrays to store values
const arr = [20, 50, 30, 60, 200]
const revArray = [] 

// changed around the for loop structure to allow a reversal of start and ending of loop.  
//starts at last index position; ends at 0 index; increments down 1;
for(let i = arr.length-1; i >= 0; i--){
    //places value within arr[i] into revArray from the back of array.
    revArray.push(arr[i])
}
// alert(revArray);


// FizzBuzz

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);
    }
    else if(i % 3 === 0){
        console.log(`Fizz`);
    }
    else if(i % 5 === 0){
        console.log(`Buzz`);
    }
    else{
        console.log(i);
    }
}