const num: number = rndNum(10, 1);

function askQuestion(): string|null {
 return prompt("Число от 1 до 10");
}

function game(): void {
    let que = Number(askQuestion());
    while(num != que && que !==0) {
        que = Number(askQuestion())
    }

    if (que == 0){
        alert("Нажал отмена")
    } else {
        alert("Угадал")
    }
}

function rndNum (max:number, min:number): number {
    let rand: number = Math.round(min + Math.random() * (max - min));
    console.log(rand);
    return rand;
}

game();
