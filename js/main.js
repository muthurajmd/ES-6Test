1. Differnce between let and const keyword?
        var and let create variables that can be reassigned another value.
        const creates "constant" variables that cannot be reassigned another value.
        developers shouldn't use var anymore. They should use let or const instead.
        if you're not going to change the value of a variable, it is good practice to use const.

2. Which methods are used to avoid Shallow copy?

3. Difference between map and foreach.
        The forEach() method does not returns a new array based on the given array. 
        The map() method returns an entirely new array. The forEach() method returns “undefined“. 
        The map() method returns the newly created array according to the provided callback function.

4. Write the states of promises.
        fulfilled: Action related to the promise succeeded.
        rejected: Action related to the promise failed.
        pending: Promise is still pending i.e. not fulfilled or rejected yet.
        
5. Difference between promise chaining and promise all.
        Promise chaining is basically several asynchronous function calls and executing them in a synchronized manner one after another using. 
        then() method. 

        The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
        This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
         with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.


6. What is the final value of obj.
const obj = {foo:1}
obj.bar = 2;
console.log(obj)

ans: {foo: 1, bar: 2}
   


7. const speed = "quick";
console.log(`The ${speed} brown fox jumps over the lazy dog`)

ans: The quick brown fox jumps over the lazy dog


8.  var obj1 = {
    id: 1,
    company: "GFG"
};
var obj2 = obj1;
obj2.id = 2;
console.log(obj1.id);
console.log(obj2.id);

ans:
2 
2


9. Input : [3,4,5,6]
    Output : [3,5,7,9]
How to achieve this output?

let a=[3,4,5,6]
let x=[]
let c

        for(i=0;i<a.length;++i){
         c=a[i]+i;
         x.push(c)      
        }
        
console.log(x)

10. Which method is used to check all values and return boolean value?

ans: some()

11.const price = [35,66,234,56,88,90,22]
How to find minimum value?

12. ES6 Published in ----
      
ans:2015

13.  var employee =[{
name : "Karuppasamy",
age : 24,
Salary : 25000,
level : "junior"
},
{
name : "Samy",
age : 21,
Salary : 20000,
level : "junior"
},{
name : "Kaviya",
age : 22,
Salary : 18000,
level : "junior"
},{
name : "Naresh",
age : 45,
Salary : 100000,
level : "senior"
},{
name : "Prem",
age : 24,
Salary : 50000,
level : "senior"
}];

Output : ["Naresh","Prem"];
Write a code ....

14.  let rem = 0
rem++;
rem++;
console.log(rem);

15. function a(){
console.log("Hi")

}

function b(){
console.log("Fabevy")
}

a(b)
Write the output...  Hi

16.  var num = 0;
console.log(num++);
console.log(num++);
console.log(++num);
console.log(num);


ans: 0
     1
     3
     3


17. Solve the armstrong logic in async/await

18.  let obj1 = {
"name" : "Monisha"
}
let obj = Object.assign({},obj1);
obj1.position = "QAE"
console.log(obj,obj1); 

ans: {name: 'Monisha'} {name: 'Monisha', position: 'QAE'}

19. let person = {name: "Linda"}
const members = [person];
person = null;
console.log(person)

ans: null


20. Which methods are used to solve async function into sync?
     
    ans:callback
        callback hell
        promise
        promise Chaining
        promise all
        async await
