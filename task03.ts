const isBirthdayData : boolean = true;
const userNameData : string = "Kate";
let ageData : number = 27;

const userData = {
    isBirthdayData: true,
    ageData: 27,
    userNameData: "Kate",
    messages: {
        error: "error"
    }
}

const createError = (msg : string) => {
    throw new Error(msg);

};

function logBrdMsg({
    isBirthdayData,
    ageData, 
    userNameData, 
    messages: {
    error
    } //деструктуризация вложенного объекта
} : {
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string,
    messages: {
        error: string
    } //типизация свойств объекта

}) : string {
    if(isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }

}

console.log(logBrdMsg(userData));

//object

const departments : string[] = ["marketing", "dev", "design"];

const department = departments[0];

// departments.push(5);
const report = departments.filter((d : string) => d !== "dev")
.map((d) => `${d} - done`);

// const num : number[][] = [
//     [1, 2, 3],
//     [1, 2, 3]
// ]; //матрица

const [first] = report;
console.log(first);
