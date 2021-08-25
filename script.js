const saveEl = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const deleteEl = document.getElementById("delete-el")
const delete1El = document.getElementById("delete1-el")
let pEl = document.getElementById("p-el")
let myLeads = []


saveEl.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    render()
})

function render() {
    let tasks = ""
    for (let i = 0; i < myLeads.length; i++) {
        tasks += "<li>" + myLeads[i] + "</li>"
    }
    pEl.innerHTML = tasks
}

deleteEl.addEventListener("click", function() {
    myLeads.pop()
    render()
    if (myLeads.length === 0 ){
        pEl.textContent = "no tasks"
    }
})

delete1El.addEventListener("click", function(){
    myLeads.shift()
    render()
    if (myLeads.length === 0 ){
        pEl.textContent = "no tasks"
    }
})

