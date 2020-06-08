const advicehead = document.querySelector("h2")
const advicebtn = document.querySelector("#mybtn")

advicebtn.addEventListener("click", () => {
    fetch('https://api.adviceslip.com/advice')
        .then(resultobj => resultobj.json())
        .then(data => {
            advicehead.innerText = data.slip.advice;
            document.body.style.backgroundColor = changeBodyColor();
        })


    advicebtn
})

function changeBodyColor() {
    let hexa = "0123456789ABCDEF";
    let has = "#";
    for (var i = 0; i < 6; i++) {
        has += hexa[Math.floor(Math.random() * 16)];
    }
    return has
}