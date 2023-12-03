console.log("Question 1")
let nums = ""
for(let i=30;i>=0;i--){
    nums+=" "+i;
}
console.log(nums);

console.log("Question 2")
const startTime = performance.now();

function delay(){
const endTime = performance.now();
const duration = endTime - startTime;
console.log(duration);
}
setTimeout(delay,1000);