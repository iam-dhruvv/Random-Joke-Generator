let jokes = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts." },
    { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    { setup: "How does a penguin build its house?", punchline: "Igloos it together." },
    { setup: "What do you get if you cross a snowman and a vampire?", punchline: "Frostbite." },
    { setup: "Why did the math book look sad?", punchline: "Because it had too many problems." },
    { setup: "Why don’t some couples go to the gym?", punchline: "Because some relationships don’t work out." },
    { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese." },
    { setup: "Why couldn't the bicycle stand up by itself?", punchline: "It was two-tired." }
];

function displayRandomJoke() {
    let setupElement = document.getElementById('setup');
    let punchlineElement = document.getElementById('punchline');
    let randomIndex = Math.floor(Math.random() * jokes.length);
    let joke = jokes[randomIndex];

    setupElement.textContent = joke.setup;
    punchlineElement.textContent = joke.punchline;
    punchlineElement.style.opacity = 0; // Reset punchline opacity

    // Trigger punchline opacity change
    setTimeout(() => {
        punchlineElement.style.opacity = 1;
    }, 300); // Delay punchline appearance
}