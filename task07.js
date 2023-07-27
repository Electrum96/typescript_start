/// enum (перечисления)
var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["Opened"] = 0] = "Opened";
    ModalStatus[ModalStatus["Closed"] = 1] = "Closed";
})(ModalStatus || (ModalStatus = {}));
;
function buildModal(text, status) {
    return { text: text, status: status };
}
var modal = buildModal('hi', ModalStatus.Opened);
console.log(modal);
var modal2 = buildModal('hi2', ModalStatus.Closed);
console.log(modal2);
function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1;
    }
    if (user2.age > user1.age) {
        return user2;
    }
    return null;
}
var user1 = { name: 'Petr', age: 8 };
var user2 = { name: 'John', age: 10 };
var result = getOlderUser(user1, user2);
console.log(result);
