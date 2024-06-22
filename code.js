//array
//fact:arrays are mutable
let array=[];
for(let i=0;i<5;i++){
    array[i]=/* prompt */('Enter an element');
}
console.log(`The array before sorting is ${array}`);

for(let j of array){
    console.log(j);
}

//Average marks
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i of marks){
    sum = sum + i;
}
let avg=sum/marks.length;
console.log(avg,sum);

//Discount 
let price=[250,645,300,900,50];
for(let i=0;i<price.length;i++){
    price[i]=price[i]*0.9;
}
console.log(price);

//functions of array
//.push('val') : adds an item to the end of array
//.pop() : removes the last item of array
//.toString('arr') : converts an Array to a string and retains original array
//.concat('arr','arr',...) : joins multiple arrays and returns result
//.unshift('val') : adds an item to the start of the array
//.shift() : removes the item at the start of array
//.slice(startIdx,endIdx) : Returns a part of the array
//.splice(startIdx,delCount,newEl1,newEl2,...) : adds, removes or replaces in the original array

//Companies
let comp=['BloomBerg','Microsoft','Uber','Google','IBM','Netflix']
console.log(comp);
delItem=comp.shift();
console.log(comp);
console.log(`deleted Item is ${delItem}`);
repItem=comp.splice(2,1,'Ola');
console.log(comp);
console.log(`The replaced Item is ${repItem}`);
comp.push('Amazon');
console.log(comp);