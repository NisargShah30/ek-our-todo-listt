const inputbox = document.getElementById("input-box");
const listcointainer = document.getElementById("list-container");

function AddTask(){
    if(inputbox.value === ''){
        alert("You Must Write Something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcointainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "./123.png"
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}
// chek unCheck Working // 
listcointainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

// save a localStorage //  //  refrace krvathi search krelo dta nai nikde becuse localstorage ma save che te btavse // 

function savedata(){
    localStorage.setItem("data", listcointainer.innerHTML);
}

function showTask(){
    listcointainer.innerHTML = localStorage.getItem("data");
}
showTask();