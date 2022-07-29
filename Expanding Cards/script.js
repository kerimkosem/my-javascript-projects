
let panels = document.querySelectorAll(".panel")

panels.forEach((item) => {
        item.addEventListener("click", () => {
            removeActiveClass()
            item.classList.add("active")
        })
})

function removeActiveClass() {
    panels.forEach((item) => {
        item.classList.remove("active")
    })
}