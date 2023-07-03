const isBirthdayData : boolean = true;
const userNameData : string = "Kate";
let ageData : number = 27;

const createError = (msg: string) => {
    // throw new Error(msg); never никакое значение не может быть возвращено
    // console.log(1); сюда код не дойдет
    //if (msg) throw new Error(msg); void (дойдёт до undefined)
    // while (true) {
    // } цикл никогда не закончится never
    throw new Error(msg);
    
};

// исчерпывающая проверка
const logBrdMsg = (isBirthday : boolean, userName : string, age : number) : string => {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return  "Too bad"
    }
    return  createError("Error"); //возвращает never
}

logBrdMsg(isBirthdayData, userNameData, 40);

// const smth: never = null; нельзя назначить в never