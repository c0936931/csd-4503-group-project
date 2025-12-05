const data = {
  "episodes": [
    {
      "label": "Episode 1",
      "value": "https://mylambton.sharepoint.com/:v:/s/Section_191279-TeamScrumStormers/EU492MBEZ91Ah2KmUby3qcYBNZZ8y-ccDni8wXPMAD_4qQ?e=Junlvx",
      "type": "link"
    },
    {
      "label": "Episode 2",
      "value": "./episodes/episode2.mp4",
      "type": "video"
    },
    {
      "label": "Episode 3",
      "value": "./episodes/episode3.mp4",
      "type": "video"
    },
    {
      "label": "Episode 4",
      "value": "./episodes/episode4.mp4",
      "type": "video"
    }
  ]
};

const episodeSelect = document.getElementById('episodeSelect');
const episodePlayer = document.getElementById('episodePlayer');
const currentEpisode = document.getElementById('currentEpisode');

// Populate dropdown
data.episodes.forEach((ep, index) => {
  const option = document.createElement('option');
  option.value = ep.value;
  option.textContent = ep.label;
  if (index === 0) option.selected = true;
  episodeSelect.appendChild(option);
});

// Function to display episode
function displayEpisode(ep) {
  if (ep.type === "video") {
    episodePlayer.style.display = "block";
    episodePlayer.src = ep.value;
    currentEpisode.textContent = ep.label;
  } else {
    episodePlayer.style.display = "none";
    currentEpisode.innerHTML = `${ep.label} - 
      <a href="${ep.value}" target="_blank" rel="noopener">Watch here</a> 
      <span style="color:gray; font-size:0.9em;">(Link provided as file was too large)</span>`;
  }
}

// Initialize first episode
displayEpisode(data.episodes[0]);

// Handle selection change
episodeSelect.addEventListener('change', () => {
  const selectedEpisode = data.episodes[episodeSelect.selectedIndex];
  displayEpisode(selectedEpisode);
});
