"use strict";

const timer = 40000; // 40sec
function handleReplay() {
  location.reload();
}

function createReplayButton() {
  const replayButton = document.createElement("button");
  replayButton.textContent = "もう一度見る";
  replayButton.onclick = handleReplay;

  document.getElementById("replay-button").appendChild(replayButton);
}

setTimeout(createReplayButton, timer);
