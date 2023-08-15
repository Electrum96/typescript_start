//Binary Search

const arr:number[] = [1,2,3,4,5,6,7,8];
// O(N)
function serachElement(arr:number[], el:number) {
    for (let i = 0; i < arr.length; i++) { // это обычный линейный поиск
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}


function searchElement1(arr:number[], el:number) {
let left = -1;
let right = arr.length;

//  O(log N)
while(right - left > 1) {
 const mid = Math.floor((left+right)/2); // середина массива

 if(arr[mid] === el) {
    return mid; 
 }
 if (arr[mid] > el) {
    right = mid;  // el находится слева и верхней границей становится mid
 } else {
    left = mid; // el справа нижней границей становится  mid
 } 
}
return -1; //если el за пределами

}

console.log(serachElement(arr, 4));
console.log(searchElement1(arr, 1)); //  результатом  получаю индекс элемента

/////////////////////////////////////////////

const arr2 = [0,1,2,3,4,5,6,7,8,9];

function binSearch2(arr2: number[], num: number) {
    let min = -1;
    let max = arr2.length;

     while(max - min > 1){
    const mid = Math.floor((max-min )/ 2);

    if (arr2[mid] === num) {
        return num
    }
    if(arr2[mid] > num){
        max = mid;
    } else {
        min = mid;
    }
}
    return -1;
    
}
console.log(binSearch2(arr2, 2));

/////////////////////////////////////////////////////////

const newArray: number[] = [1,2,3,2,4,5,2,3,8,12,10,3];

newArray.sort((a:number, b:number) => a - b);

function binSearch(newArray: number[], el:number) {
    let left = -1;
    let right = newArray.length;

while(right - left > 1) {
 const mid = Math.floor((left+right)/2); 

 if(newArray[mid] === el) {
    return mid; 
 }
 if (newArray[mid] > el) {
    right = mid;  
 } else {
    left = mid; 
 } 
}
return -1; 
}

function countFreq(newArray:number[], el:number) {
    const posEl = binSearch(newArray, el);

    if (posEl === -1) { // элемент не входил
        return 0
    }

    let i = posEl;
    while (newArray[i] === el) {
        i--;
    }
    let j = posEl;
    while (newArray[j] === el) {
        j++;
    }
    return j - i - 1;
}

console.log(countFreq(newArray, 3));



