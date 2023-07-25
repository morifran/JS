//Задание 8.7.1
/*function printInfo( ){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

let person = {
 name: "Alex",
 age: 16
};

printInfo.call (person);*/

//Задание 8.7.2

/*function calculate(a,b,operator ){
    if(operator == "+"){
        console.log(a+b)
    } else if (operator == "-"){
        console.log(a-b)
    } else if (operator == "*"){
        console.log(a*b)
    } else if (operator == "/"){
        console.log(a/b)
    }
}

let arguments = [1000, 5, "/"]
const result = calculate.apply(null, arguments)*/

//Задание 8.7.3
/*const users = [
    { name: "Акулбек", age: 4 },
    { name: "Кириешка", age: 17 },
    { name: "Олег-Монгол", age: 30 },
    { name: "Огрызок", age: 22 }
  ];
  const adults = users.filter(user => user.age >= 18);
  console.log(adults);
  const kids = users.filter(user => user.age < 18)
  console.log(kids)*/    

//Задание 8.7.4 

/*function setFullName(fullName) {
    this.fullName = fullName;
  }
  
  const person = {
    name: "Драздрасмыг",
    age: 30
  };
  
  const setPersonFullName = setFullName.bind(person);
  
  setPersonFullName("Драздрасмыг Петров");
  
  console.log(person.fullName);*/

  //Задание 8.7.5
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания.

/*function getUniqueNumbers(arr) {
    return arr.filter((number, index, array) => array.indexOf(number) === index);
  }
  const numbers = [1, 2, 3, 2, 4, 5, 1, 6];
  const uniqueNumbers = getUniqueNumbers(numbers);
  console.log(uniqueNumbers);*/
  