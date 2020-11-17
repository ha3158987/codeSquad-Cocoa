//ES Class 사용하기

/************************************1st module: todolist를 처리하는 Model Class*****************************/
//1. 아이템 추가 (input 데이터가 계속 추가되기 때문에 생성자함수를 쓰기)


class modelController {
    constructor () {
    }

    init = function () {
        this.addEvent();
    }

    addEvent = function () {
        const button = document.querySelector(".button");
        button.addEventListener('click', this.makeNewLi);
    }

    makeNewLi = function () { //li tag 만들기
        const newItem = document.createElement('li');
        newItem.classList.add("list");

        const taskText = document.querySelector(".task_text").value;
        newItem.textContent = taskText;

        //checkbox 추가
        const checkBox = document.createElement('input');
        checkBox.classList.add("new_item");
        checkBox.type = "checkbox";
        newItem.appendChild(checkBox);

        //휴지통 아이콘 추가
        const trashIcon = document.createElement('ion-icon');
        trashIcon.name = "trash-outline";
        newItem.appendChild(trashIcon);

        this.addNewLi(this.newItem);
    }

    addNewLi = function (newLi) {
        const parentNode = document.getElementById("tasks");
        parentNode.appendChild(newLi);
    }



}

const myToDO = new modelController();
myToDO.init();

