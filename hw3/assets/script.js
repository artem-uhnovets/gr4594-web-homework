// let askName = prompt("Введите пожалуйста имя", "Имя");
// alert(`Добро пожаловать, ${askName}!`);
// let askAge = +prompt(askName+", введите пожалуйста возраст", "Возраст");
// switch (true) {
//     case askAge>=18 && askAge<=29 : {
//         alert("Отлично, Вы совершеннолетний(яя)! Все можно!");
//         break;
//     }
//     case askAge>=10 && askAge<=17 : {
//         alert("Все ли уроки сделаны?!")
//         break;
//     }
//     case askAge>=30 && askAge<=199 : {
//         alert("Если время позднее, может лечь спать?!")
//         break;
//     }
//     case askAge>=1 && askAge<=9: {
//         alert("Серьезно?!")
//     }
//     default: {
//         alert("Ошибка ввода!")
//     }        
// }

let btn = document.getElementById("btn1");
console.log(btn);
btn.addEventListener('click',changecolor);

function changecolor() {
    let tochange = document.getElementById('startwords');
    tochange.classList.toggle('redtext');
    if (tochange.innerHTML == "Добро пожаловать!") {
        tochange.innerHTML = "Правда здорово!!!";
    } else { tochange.innerHTML = "Добро пожаловать!"; }
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click',changecolorlists);

function changecolorlists() {
    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");
    list1.classList.toggle('active')
    list2.classList.toggle('active')
}