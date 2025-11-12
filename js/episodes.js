const data = {
    "episodes": [
        { "label": "Episode 1", "value": "./episodes/episode1.mp4" },
        { "label": "Episode 2", "value": "./episodes/episode2.mp4" },
        { "label": "Episode 3", "value": "./episodes/episode3.mp4" },
        { "label": "Episode 4", "value": "./episodes/episode4.mp4" }
    ]
};

const episodeSelect = document.getElementById('episodeSelect');
const episodePlayer = document.getElementById('episodePlayer');
const currentEpisode = document.getElementById('currentEpisode');

data.episodes.forEach((ep, index) => {
    const option = document.createElement('option');
    option.value = ep.value;
    option.textContent = ep.label;
    if (index === 0) option.selected = true;
    episodeSelect.appendChild(option);
});

episodePlayer.src = data.episodes[0].value;
currentEpisode.textContent = data.episodes[0].label;

episodeSelect.addEventListener('change', () => {
    const selectedOption = episodeSelect.options[episodeSelect.selectedIndex];
    episodePlayer.src = selectedOption.value;
    currentEpisode.textContent = selectedOption.text;
});
