var num = rndNum(10, 1);
function askQuestion() {
    return prompt("Число от 1 до 10");
}
function game() {
    var que = Number(askQuestion());
    while (num != que && que !== 0) {
        que = Number(askQuestion());
    }
    if (que == 0) {
        alert("Нажал отмена");
    }
    else {
        alert("Угадал");
    }
}
function rndNum(max, min) {
    var rand = Math.round(min + Math.random() * (max - min));
    console.log(rand);
    return rand;
}
game();
