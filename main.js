const btn = document.getElementById("inactive")
const yesBtn = document.getElementById("active")

document.getElementById('inactive').disabled = true

const randomVal = () => {
    return (Math.floor(Math.random() * 90))
}

const newCords = (x, y) => {
    btn.style.position = "absolute"
    btn.style.transition = "0.3s"
    btn.style.top = randomVal(x) + "vh"
    btn.style.right = randomVal(y) + "vh"
}

btn.addEventListener('mouseover', (event) => {
    newCords(event.clientX, event.clientY)
})

yesBtn.addEventListener("click", () => {
    document.getElementById("source").src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJjZnZjZXBqenh1aHpscm41cG1nN256MnIyNTFxZHhxNnR1dTkwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kEKcOWl8RMLde/giphy.gif"

    document.getElementsByClassName("title")[0].innerText = "Yes! Finally!"

    document.querySelectorAll("button").forEach(button => {
        button.style.display = "none"
    })
})