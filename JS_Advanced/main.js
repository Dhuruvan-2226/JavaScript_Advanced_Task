console.log("1. Recursion and stack:");
console.log("Task-1:");
function Factorial(num)
{
    if(num==0)
    {
        return 1;
    }
    return num*Factorial(num-1);
}
console.log(`Factorial of 5 is ${Factorial(5)}`);

console.log("Task-2")
function Fibonacci(num)
{
    if(num<=1)
    {
        return num;
    }
    return Fibonacci(num-1)+Fibonacci(num-2);
}
console.log(`Fibonacci of 5th is ${Fibonacci(5)}`);

console.log("Task-3:")
function ClimbingStairs(num)
{
    if(num<=2)
    {
        return num;
    }
    return ClimbingStairs(num-1)+ClimbingStairs(num-2);
}
console.log(`No of ways to climb the stairs is ${ClimbingStairs(5)}`);

console.log("Task-4:")
function Result(input)
{
    arr=[];
    Flatten(0,input,arr);
    return arr;
}
function Flatten(i,input,arr)
{
    if(i>=input.length) return;
    if(Array.isArray(input[i])) Flatten(0,input[i],arr);
    else arr.push(input[i]);
    Flatten(i+1,input,arr);
}
ans=Result([1,2,[3,[4,5]],6]);
console.log(ans);

console.log("Task-5:")
function TOH(num,src,dest,aux)
{
    if(num==0)
    {
        return;
    }
    TOH(num-1,src,aux,dest);
    console.log(`Move disk ${num} from rod ${src} to rod ${dest}`);
    TOH(num-1,aux,dest,src);
}
TOH(3,'A','C','B');

console.log("2. JSON and variable length arguments/spread syntax:");
console.log("Task-1");
function sumArguments(...args) {
    return args.reduce((sum, num)=>sum+num,0);
}
console.log(sumArguments(1,2,3,4)); 

console.log(`Task-2:`)
function sumArray(numbers) {
    return sumArguments(...numbers);
}
console.log(sumArray([1,2,3,4])); 

console.log(`Task-3`)        
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original={a:1,b:{c:2}};
const cloned=deepClone(original);
console.log(cloned); 
cloned.b.c=3;
console.log(original.b.c); 

console.log(`Task-4:`)
function mergeObjects(obj1,obj2) {
    return {...obj1,...obj2};
}
const obj1={a:1,b:2};
const obj2={b:3,c:4};
const merged=mergeObjects(obj1,obj2);
console.log(merged);

console.log(`Task-5`)        
function serializeAndParse(obj) {
    const jsonString=JSON.stringify(obj);
    return JSON.parse(jsonString); 
}
const originalObject={x:10,y:{z:20}};
const parsedObject=serializeAndParse(originalObject);
console.log(parsedObject);

console.log(`3.Closure`)
console.log(`Task-1`)
function outerFunction() {
    const capturedVariable = "I am captured!";
    return function innerFunction() {
        return capturedVariable;
    };
}
const func = outerFunction();
console.log(func());

console.log(`Task-2`)        
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); 

console.log(`Task-3:`)
function createCounter1() {
    let count1 = 0;
    return {
        increment: function () {
            count1++;
        },
        getCount: function () {
            return count1;
        }
    };
}
const counter1 = createCounter1();
const counter2 = createCounter1();
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getCount());  
console.log(counter2.getCount());  

console.log(`Task-4`)
function createPrivateVariable()
{
    let privatevariable=22;
    return {
        getValue: function(){
            return privatevariable;
        },
        setValue: function(newValue){
            privatevariable=newValue;
        }
    };
}
const privateVarHandler=createPrivateVariable();
console.log(privateVarHandler.getValue());
privateVarHandler.setValue(26);
console.log(privateVarHandler.getValue());

console.log(`Task-5:`)
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(6));
//console.log(createMultiplier(2)(6)); 
console.log(triple(5)); 

console.log(`Promise, Promises chaining:`)
console.log("Task 1");

function delayedGreeting(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, seconds * 1000);
    });
}
delayedGreeting(2).then((greeting) => console.log(greeting));

console.log("Task 2");
function fetchAndProcessData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
            console.log("Fetched Data:", data);
            return data.title.toUpperCase();
        })
        .then((processedData) => console.log("Processed Data:", processedData))
        .catch((error) => console.error("Error:", error));
}
fetchAndProcessData();

console.log("Task 3");
function randomOutcome() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Success! Random number is greater than 0.5");
        } else {
            reject("Failure! Random number is less than or equal to 0.5");
        }
    });
}
randomOutcome()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

console.log("Task 4");
function fetchMultipleResources() {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
    ];
    const fetchPromises = urls.map((url) => fetch(url).then((response) => response.json()));
    Promise.all(fetchPromises)
        .then((results) => {
            console.log("Fetched All Data:", results);
        })
        .catch((error) => console.error("Error in fetching:", error));
    }
    fetchMultipleResources();  

console.log("Task 5");
function chainedActions() {
    return new Promise((resolve) => {
        console.log("Step 1: Starting...");
        resolve(5);
    })
        .then((number) => {
            console.log("Step 2: Multiplying by 2...");
            return number * 2;
        })
        .then((result) => {
            console.log("Step 3: Adding 10...");
            return result + 10;
        })
        .then((finalResult) => {
            console.log("Step 4: Final Result:", finalResult);
        })
        .catch((error) => console.error("Error:", error));
}
chainedActions();    

console.log("Async Task 1");
async function delayedGreeting(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, seconds * 1000);
    });
}
(async () => {
    const greeting = await delayedGreeting(2);
    console.log(greeting); 
})();

console.log("Async Task 2");

async function fetchAndProcessData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Fetched Data:", data);
    const processedData = data.title.toUpperCase();
    console.log("Processed Data:", processedData);
}
fetchAndProcessData();

console.log("Async Task 3");
async function fetchWithErrorHandling() {
    try {
        const response = await fetch("https://invalid-api-url.com");
        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error Fetching Data:", error.message);
    }
}
fetchWithErrorHandling();

console.log("Async Task 4");
async function fetchMultipleResources() {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
    ];
    try {
        const results = await Promise.all(
            urls.map((url) => fetch(url).then((response) => response.json()))
        );
        console.log("Fetched All Data:", results);
    } catch (error) {
        console.error("Error Fetching Resources:", error.message);
    }
}
fetchMultipleResources();

console.log("Async Task 5");
async function performOperations() {
    const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 Done"), 1000));
    const task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 Done"), 2000));
    const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 Done"), 1500));

    const results = await Promise.all([task1, task2, task3]);
    console.log("All Tasks Completed:", results);
}
performOperations();



