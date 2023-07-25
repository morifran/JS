//Задание 7.6.1

/*
let word = prompt();
let lowerCaseWord = word.toLowerCase();
console.log(lowerCaseWord)
let inverseWord = lowerCaseWord.split('').reverse().join(''); 
if (lowerCaseWord == inverseWord){
    alert("Это слово является палиндромом!")
} else {
    alert("Это слово не является палиндромом!")
} */

//Задание 7.6.2

/*
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const arr2 = [...new Set(arr)];
console.log(arr2)
*/

//Задание 7.6.3

/*
let num = prompt();
let arr = [];
for ( i = 1; i <= num; i +=1 ){
    arr.push(i)
}
console.log(arr)
*/

//Задание 7.6.4 // я хотел заменить четные числа в массиве на нолик, а нечетные на крестик, но так и не смог.

/*
let arr = [];
let arr2 = [[], [], [] ];
let arr3 = [[], [], [] ];
let size = 9;
for(row = 1; row <= size; row++){
arr.push(row)
}
for (let num of arr){    
if( num<=3){    
arr2[0].push(num)
} 
else if(num<=6) {
arr2[1].push(num);
}
else if(6<num<=6) {
arr2[2].push(num);
}
}
console.log(arr)
console.log(arr2)
*/

//Задание 7.6.5

/*
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];

for (const key in obj) {
    if (Array.isArray(obj[key])) {
        arrValues.push(...obj[key]);
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);
*/