// let userName: string = "Kate"; //указание нужного типа

// userName = 6;

// '', "", ``
// 10, 0.5, 0.0001, -50, 
// true, false

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';


// function logBrdMsg (isBirthday: boolean, userName: string, age: number): string {
//     // void полное игнорирование возвращаемого значения,  если явно не указан - undefined
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`; 
//     } else {
//         return "Error";
//     }
// }

const logBrdMsg = (isBirthday: boolean, userName: string, age: number): string  => {
    // void полное игнорирование возвращаемого значения,  если явно не указан - undefined
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`; 
    } else {
        return "Error";
    }
}

logBrdMsg(isBirthdayData, userNameData, 40);