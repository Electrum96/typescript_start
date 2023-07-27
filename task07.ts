/// enum (перечисления)
enum ModalStatus {
    Opened,
    Closed
};

function buildModal (text:string, status:ModalStatus): {text: string, status: ModalStatus}{

    return { text, status};
}

const modal = buildModal('hi', ModalStatus.Opened);

console.log(modal);

const modal2 = buildModal('hi2', ModalStatus.Closed);

console.log(modal2);


// alias (псевдоним типов)

type User = {
    name: string;
    age: number;
};

function getOlderUser(user1: User, user2: User): User|null {
    if(user1.age > user2.age){
       return user1
    }
    if(user2.age > user1.age){
        return user2
    }
    return null
}

const user1 = { name: 'Petr', age: 8 };
const user2 = {name:'John', age: 10};
const result = getOlderUser(user1, user2)
console.log(result);


