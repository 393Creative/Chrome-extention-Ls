let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    for (let i = 0; i < myLeads.length; i++) {
        ulEL.innerHTML = "<li>" + myLeads[i] + "</li>"
    }
})