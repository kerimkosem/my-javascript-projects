const joke = document.getElementById("joke")
const btn = document.getElementById("btn")

btn.addEventListener("click",loadJoke)

loadJoke();


function loadJoke() {

    let config = {

        headers: {
            "Accept":"application/json"
        }
    }

    fetch("https://icanhazdadjoke.com",config)
    .then(res => res.json())
    .then(data => joke.innerHTML = data.joke)

}