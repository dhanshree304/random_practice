let myFormEl = document.querySelector("form");
let taskInp = document.getElementById("task");
let prioritySelect = document.querySelector("#priority");
let tbody1 = document.querySelector("tbody");

let globalArr = [];

myFormEl.addeventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    task: taskInp.value,
    priority: prioritySelect.value
  };
  globalArr.push(obj);
  //console.log(globalArr);
tbody1.innerHTML=null//it will clean up over writing in tbody before running a loop.
  for (let i = 0; i < globalArr.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerText = globalArr[i].task;
    td2.innerText = globalArr[i].priority;

    tr.append(td1, td2);
    tbody1.append(tr);
  }
});
