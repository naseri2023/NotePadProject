let noteList = document.getElementById("notes-list")
let inputItem = document.getElementById("note-input")
let colorOptions = document.querySelectorAll(".color-option")
let selectedColor = "#ffffff"


colorOptions.forEach(function (option) {
    option.addEventListener('click', function() {
        selectedColor = option.style.backgroundColor;
        inputItem.style.backgroundColor = selectedColor;

    });
});

function addNote() {
    const divElem = document.createElement("div")

    divElem.className = "divElem"
    divElem.style.backgroundColor = selectedColor
    divElem.textContent = inputItem.value

    divElem.addEventListener("click",function () {
        divElem.remove()
    })

    noteList.appendChild(divElem)
    inputItem.value = ""
    inputItem.style.backgroundColor = "#ffffff"
}

function clearInput() {
    inputItem.value = ""
    inputItem.style.backgroundColor = "#ffffff"
}

inputItem.addEventListener("keydown",function (event) {
    if (event.key === "Enter")
        addNote()
})

