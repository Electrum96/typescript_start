// let userName: string = "Kate"; //указание нужного типа

// userName = 6;

// '', "", ``
// 10, 0.5, 0.0001, -50, 
// true, false

// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = 'John';


// function logBrdMsg (isBirthday: boolean, userName: string, age: number): string {
//     // void полное игнорирование возвращаемого значения,  если явно не указан - undefined
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`; 
//     } else {
//         return "Error";
//     }
// }

// let salary;
// salary = 5000; //избегать такую запись

let salary: number; //указание типа сразу
salary: 5000;

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData: "John"}';

const userObj: {
    //аннотация объекта
    isBirthdayData: boolean,
    userNameData: string,
    ageData: number;
} = JSON.parse(userData);
console.log(userObj.smt());


const logBrdMsg = (isBirthday: boolean, userName: string, age: number): string  => {
    // void полное игнорирование возвращаемого значения,  если явно не указан - undefined
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`; 
    } else {
        return "Error";
    }
}

logBrdMsg(isBirthdayData, userNameData, 40);