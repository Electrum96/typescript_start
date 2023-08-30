const nums = [-1, 0, 3, 5, 9, 12];
const target = 6;

function binarySerching(nums: number[], target: number) {

    let min = -1;
    let max = nums.length;
    let guess;

    while (max - min > 1) {
        let mid = Math.floor((max + min) / 2)

        if (nums[mid] === target) {
            return mid
        }
        if (target > nums[mid]) {
            min = mid

            guess = mid + 1

        } else {
            max = mid
            guess = mid

        }

    } return guess

};

console.log(binarySerching(nums, target));

//Учитывая отсортированный массив различных целых чисел и целевое значение, возвращается индекс, если цель найдена. Если нет, возвращается индекс там, где он был бы, если бы он был вставлен по порядку.