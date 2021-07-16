const jokeBtn = document.querySelector("#submit-btn10")
const jokes = document.querySelector("#jokes")

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    } catch (e) {
        return "NO JOKES AVAILABLE :/"
    }
}

let createLi = document.createElement("li")

const dadJoke = async () => {
    const jokeText = await getDadJoke()
    createLi.textContent = jokeText
    jokes.append(createLi)
}

jokeBtn.addEventListener('click', () => dadJoke())