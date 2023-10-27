const inputbox = document.getElementById("inputBox");
const listContiner = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ""){
        alert("you must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listContiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      

    }
    inputbox.value = "";
    saveData();
}
// addTask();

listContiner.addEventListener("click",function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
            saveData();
        }
        
})


// storing the data whenever we refersh the webpage. this function will save whatever we written in the input box.

function saveData(){
    localStorage.setItem("data",listContiner.innerHTML);
}

// the function will store the data(li-items) whenever the webpage clodsed.the data will display as it is before we close the webpage.

function showTask(){
    listContiner.innerHTML = localStorage.getItem("data");
}
showTask();