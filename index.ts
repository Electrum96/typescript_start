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
    messages: {error}
}: {
    isBirthdayData: boolean,
    ageData: number
    userNameData: string
    messages: {error: string}

}) : string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }

}

console.log(logBrdMsg(userData));

//object