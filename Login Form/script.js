let labels = document.querySelectorAll("label")

labels.forEach(label => {
    label.innerHTML = label.innerHTML.split("")
    .map((letter,index) => `<span style="transition-delay:${index * 50}ms" >${letter}</span>`).join("")


    console.log(labels)
})