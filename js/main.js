// Menu styling
window.onscroll = function() {animateDiv()};
content1 = document.getElementById("content1");
content2 = document.getElementById("content2");
content3 = document.getElementById("content3");

function animateDiv() {
    if (window.scrollY >= 250) {
        content2.classList.add('animate__animated');
        content2.classList.add('animate__fadeInRight');
        content2.style.display = 'grid';
    }
    if (window.scrollY >= 500) {
        content3.classList.add('animate__animated');
        content3.classList.add('animate__fadeInLeft');
        content3.style.display = 'grid';
    }
}

// Map coding
const palletTown = [
        {
            name: 'Bulbasaur',
            level: 5,
            move1: 'Tackle',
            move2: 'Growl',
            move3: 'None',
            move4: 'None'
        }, {
            name: 'Charmander',
            level: 5,
            move1: 'Scratch',
            move2: 'Leer',
            move3: 'None',
            move4: 'None'
        }, {
            name: 'Squirtle',
            level: 5,
            move1: 'Tackle',
            move2: 'Growl',
            move3: 'None',
            move4: 'None'
        }];

displayBox = document.getElementById('pokemonDisplay')

function displayPokemon(location) {
    var htmldisplay = location.map((pokemon) => {
        return `
        <div>
            <img class="pokemonicon" src="images/pokemon/${pokemon.name}.png">
            <h2>${pokemon.name}</h2>
            <p>Level: ${pokemon.level}</p>
            <p>Moves: ${pokemon.move1}, ${pokemon.move2}, ${pokemon.move3}, ${pokemon.move4}</p>`
    })
    displayBox.innerHTML = htmldisplay;
}