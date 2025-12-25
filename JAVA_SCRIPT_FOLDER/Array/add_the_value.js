let arr1=[1,2];

for(let i=3; i<=5;i++){
    arr1.unshift(i);  //add the value at the top
}

console.log(arr1);     //1

for(let i=6; i<=10;i++){
    arr1.push(i);  //add the value at the end
}

console.log(arr1);    //2

arr1.splice(4,1,100);  //add element at any position 4 is postition 1 is how many times and 100 means add 100 element

console.log(arr1);    //3


// delete the element

arr1.shift();  // at top side 
arr1.pop();    // at end side

arr1.shift();
arr1.pop();

console.log(arr1)    //4

arr1.splice(0,1)    // at any position

console.log(arr1)    //5