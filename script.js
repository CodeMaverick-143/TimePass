// Fetch games from the JSON file and dynamically render them
fetch('games.json')
    .then(response => response.json())
    .then(games => {
        const gameGrid = document.querySelector('.grid');

        games.forEach(game => {
            const gameCard = document.createElement('article');
            gameCard.classList.add('game-card');
            gameCard.setAttribute('data-game', game.id);

            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}" class="game-img">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <button class="btn-gradient">Play Now</button>
            `;

            gameCard.querySelector('.btn-gradient').addEventListener('click', () => {
                window.location.href = game.url;
            });

            gameGrid.appendChild(gameCard);
        });
    })
    .catch(error => console.error('Error loading games:', error));
    function updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        datetimeElement.textContent = now.toLocaleDateString('en-US', options);
    }

    // Update date and time every minute
    updateDateTime();
    setInterval(updateDateTime, 60000);