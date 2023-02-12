"use strict"

// function findFactorial(number){
//   if(number == 1){
//     return number;
//   }
//   else{
//     return number*findFactorial(number-1)
//   }
   
// }
// console.log(findFactorial(3))


// let user1 = {
//     name:"Qosqar",
//     surname: "Narimanli",
//     age: 29,
// }

// let user2 = {
//     name:"Elon",
//     surname: "Musk",
//     age: 45,
// }

// let user3 = {
//     name: "Bill",
//     surname: "Gates",
//     age: 55,
// }

// let user4 = {
//     name: "Cem",
//     surname: "Uzan",
//     age: 58,
// }

// let user5 = {
//     name: "Ronaldo",
//     surname: "Cristiano",
//     age: 38,
// }

// let users = [user1,user2,user3,user4,user5];


// function getAvarageAgeOfUsers(users){
//     let sum = 0;
//     let count = 0;
//     for (const user of users) {
//         sum+=user.age;
//         count++
        
//     }
//     let avarage= sum/count;

//     console.log(avarage)
// }

// getAvarageAgeOfUsers(users);

// function getCount(num){
//     console.log(num);
//     let number = num-1;

//     if(number>0){
//         getCount(num);
//     }


    
// }

// getCount(4)

// // let sum = 0;
// // function getSumOfNumbers(num){
// //     if ((num-1) > 0){
// //          sum+=num;
// //          getSumOfNumbers(num-1);
// //     }
// //     else{
// //         console.log(sum);
// //     }
// // }

// // getSumOfNumbers(4);

// // function getFactorial(num)
// // {
// //     if (num == 1){
// //         return num;
// //     }
// //     else
// //     {
// //         return num * getFactorial(num-1);
// //     }
// // }

// // console.log(getFactorial(3));


// // numbers.forEach( (element,index,arr) =>{
// //     // console.log(`Index: ${index},Element: ${element}`);
// //     numbers[index] = element * 2;
// // });

// // console.log(numbers);

// // let numbers = [1,2,3,4,5,6,7];
// // for (const item of numbers) {
// //     console.log(item);
// // }

// // let numbers = [1,2,3,4,5,6,7];

// // let user = {
// //     name: "Gultac",
// //     surname: "Ceferova",
// //     age: 18
// // }



// // for (const key in user) {
// //     console.log(key + "/" + user[key]);
// // }



// // let user1 = {
// //     name: "Gultac",
// //     surname: "Ceferova",
// //     age: 21
// // }



// // let user2 = {
// //     name: "Lale",
// //     surname: "Quliyeva",
// //     age: 15
// // }



// // let user3 = {
// //     name: "Novreste",
// //     surname: "Aslanzade",
// //     age: 25
// // }



// // let users = [user1,user2,user3];

// // for (const user of users) {
// //     if (user.age > 20)
// //     {
// //         console.log(user.name + " " + user.surname);
// //     }
// // }



// // for (const user of users) {
// //     for (const key in user){
// //         if (key == "surname")
// //         {
// //             console.log(key + " / " + user[key]);
// //         }
// //     }
// // }



// // users.forEach( (element,index) => {
// //      for (const key in element )
// //      {
// //           console.log(`Index: ${index} / Key: ${key} / Value: ${element[key]}`);
// //      }
// // })


// // let arr1 = [1,2,3,4];

// // console.log(arr1);

// // let arr2 = arr1;

// // arr2[0] = 100;

// // console.log(arr1);


// // let nums = [2,3,4,6,8,9,11];


// // let result = nums.map( element => {
// //     return element * 2;
// // })


// // console.log(result);


// // let nums = [2,3,4,6,8,9,11];


// // function getNumbers(n,m,...nums)
// // {
// //     for (const item of nums) {
// //         console.log(item + "/" + n)
// //     }
// // }

// // getNumbers(1,2,3,4,5);


// // let nums = [2,3,4,5,6,8,11];


// // let copyArr = [...nums]


// // console.log(copyArr);

// // let stu ={
// //     name: "Anar",
// //     surname: "Huseynov"
// // }

// // let copyObj = {...stu};
// // console.log(copyObj);



// // let user1 = {
// //     name: "Gultac",
// //     surname: "Ceferova",
// //     age: 30
// // }



// // let user2 = {
// //     name: "Lale",
// //     surname: "Quliyeva",
// //     age: 50
// // }



// // let user3 = {
// //     name: "Novreste",
// //     surname: "Aslanzade",
// //     age: 40
// // }


// // let users = [user1,user2,user3];
// // console.log(getDatasOfUsers(users));

// // function getDatasofUsers(users)
// // {
// //     let sum = 0;
// //     for (const user of users) {
// //         sum+=user.age;
// //     }
// //     return sum/users.length;
// // }

// // const getDatasOfUsers = users =>
// // {
// //     let sum = 0;
// //     for (const user of users) {
// //         sum+=user.age;
// //     }
// //     return sum/users.length;
// // }


// // const checkOdd = num => num % 2 == 1

// // const checkEven = num => num % 2 == 0

// // const checkGreaterThanFive = num => num > 5

// // function sumofNumbersByCondition(nums,callback1,callback2){
// //     let sum1 = 0;
// //     let sum2 = 0;
// //     for (const item of nums) {
// //         if (callback(item)){
// //             sum1+=item;
// //         }
// //     }

// //     for (const item of nums) {
// //         if (callback(item)){
// //             sum2+=item;
// //         }
// //     }

// //     return sum1+sum2;
// // }

// // let nums = [1,2,3,4,5,6,7,];

// // let endSum = sumofNumbersByCondition(nums,checkOdd,checkEven);

// // console.log(endSum);




// // let result1 = sumofNumbersByCondition(nums,checkOdd);
// // let result2 = sumofNumbersByCondition(nums,checkEven);
// // let result3 = sumofNumbersByCondition(nums,sumOfGreaterThanFive);

// // console.log(result1);
// // console.log(result2);
// // console.log(result3);



// // function sumOfOdd(arr){
// //     let sum = 0;
// //     for (const item of arr) {
// //         if (item % 2 === 1){
// //             sum+=item;
// //         }
// //     }
// //     return sum;
// // }

// // function sumOfEven(arr){
// //     let sum = 0;
// //     for (const item of arr) {
// //         if (item % 2 === 0){
// //             sum+=item;
// //         }
// //     }
// //     return sum;
// // }

// // function sumOfGreaterThanFive(arr){
// //     let sum = 0;
// //     for (const item of arr) {
// //         if (item > 5){
// //             sum+=item;
// //         }
// //     }
// //     return sum;
// // }

// // let result = sumOfGreaterThanFive(nums);
// // let result = sumOfEven(nums);
// // console.log(result);
