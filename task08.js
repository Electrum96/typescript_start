//Binary Search
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// O(N)
function serachElement(arr, el) {
    for (var i = 0; i < arr.length; i++) { // это обычный линейный поиск
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}
function searchElement1(arr, el) {
    var left = -1;
    var right = arr.length;
    //  O(log N)
    while (right - left > 1) {
        var mid = Math.floor((left + right) / 2); // середина массива
        if (arr[mid] === el) {
            return mid;
        }
        if (arr[mid] > el) {
            right = mid; // el находится слева и верхней границей становится mid
        }
        else {
            left = mid; // el справа нижней границей становится  mid
        }
    }
    return -1; //если el за пределами
}
console.log(serachElement(arr, 4));
console.log(searchElement1(arr, 1)); //  результатом  получаю индекс элемента
/////////////////////////////////////////////////////////
var newArray = [1, 2, 3, 2, 4, 5, 2, 3, 8, 12, 10, 3];
newArray.sort(function (a, b) { return a - b; });
function binSearch(newArray, el) {
    var left = -1;
    var right = newArray.length;
    while (right - left > 1) {
        var mid = Math.floor((left + right) / 2);
        if (newArray[mid] === el) {
            return mid;
        }
        if (newArray[mid] > el) {
            right = mid;
        }
        else {
            left = mid;
        }
    }
    return -1;
}
function countFreq(newArray, el) {
    var posEl = binSearch(newArray, el);
    if (posEl === -1) { // элемент не входил
        return 0;
    }
    var i = posEl;
    while (newArray[i] === el) {
        i--;
    }
    var j = posEl;
    while (newArray[j] === el) {
        j++;
    }
    return j - i - 1;
}
console.log(countFreq(newArray, 3));
