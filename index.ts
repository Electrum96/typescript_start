const isBirthdayData : boolean = true;
const userNameData : string = "Kate";
let ageData : number = 27;

const userData = {
    isBirthdayData: true,
    userNameData: "Kate",
    ageData: 27,
    messages: {
        error: "Error"
    }
};

const createError = (msg : string) => {
    throw new Error(msg);

};

function logBrdMsg({
    isBirthdayData, 
    ageData, 
    userNameData, 
    messages: 
    {error},
    }: {
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
    messages: { error: string}
}) : string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }

}

console.log(logBrdMsg(userData));

// const smth: never = null; нельзя назначить в never