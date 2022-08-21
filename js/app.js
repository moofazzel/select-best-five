document.querySelectorAll(".select-btn").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const playerName = this.parentElement.children[0].innerText;

    const selectedPlayers = document.getElementById("selected-players");
    const selectedPlayerParent = selectedPlayers.children;
      
    if (selectedPlayerParent.length === 5) {
      alert("You can not add more five Players");
      return;
    }
    const li = document.createElement("li");
    const selectedSinglePlayer = selectedPlayers.appendChild(li);
    selectedSinglePlayer.innerText = playerName;

    const disabled = this.parentElement.children[2];
    disabled.setAttribute("disabled", "");
    disabled.classList.add("disabled");

    console.log(selectedPlayerParent);
  });
});
