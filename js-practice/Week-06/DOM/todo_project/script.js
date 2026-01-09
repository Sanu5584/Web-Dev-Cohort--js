const addBtn = document.querySelector("#add-btn")
const todoInput = document.querySelector("#todo-input")
const todoItemsContainer = document.querySelector("#todo-items-container")
const removeAllBtn = document.querySelector("#remove-all-btn")



addBtn.addEventListener("click", function () {
    const value = todoInput.value
    console.log("User Entered Value: ", value);

    const li = document.createElement("li")
    li.className = "todo-item"
    li.innerText = value
    todoItemsContainer.appendChild(li)
    todoInput.value = null

    const delBtn = document.createElement("button")
    delBtn.innerText = "X"
    delBtn.addEventListener("click", function () {
        li.remove()
    })
    li.appendChild(delBtn)


})

removeAllBtn.addEventListener("click", function () {
    const currentItems = todoItemsContainer.querySelectorAll('.todo-item')
    currentItems.forEach(function (item) {
        item.remove()
    })
})


