const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")
const greyBtn = document.querySelector("#grey-btn")
const whiteBtn = document.querySelector("#white-btn")
const blueBtn = document.querySelector("#blue-btn")
const yellowBtn = document.querySelector("#yellow-btn")

buttons.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener("click", function (e) {
        console.log("obj: ", e);
        console.log("target: ", e.target);
        if (e.target.id === "grey") {
            document.body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "white") {
            document.body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "blue") {
            document.body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "yellow") {
            document.body.style.backgroundColor = e.target.id
        }
        else {
            throw new TypeError("This background colour is not exists")
        }
    })
})
