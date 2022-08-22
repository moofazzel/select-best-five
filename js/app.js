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
  });
});

document
  .getElementById("btn-player-cost")
  .addEventListener("click", function () {
    const selectedPlayers = document.getElementById("selected-players");
    const selectedPlayer = selectedPlayers.children.length;

    const playerCostField =
      getInputValueById("per-player-cost-field") * selectedPlayer;

    //   set total player cost
    //   set inner text function has two parameter id and value
    setInnerTextById("total-players-cost", playerCostField);

    console.log(playerCostField);
  });

document
  .getElementById("btn-others-cost")
  .addEventListener("click", function () {
    const totalPlayerCost = parseFloat(
      document.getElementById("total-players-cost").innerText
    );
    const managerCost = getInputValueById("manager-cost-field");
    const coachCost = getInputValueById("coach-cost-field");

      const grandTotalCost = totalPlayerCost + parseFloat(managerCost) + coachCost;
      
    //   set total player cost
    //   set inner text function has two parameter id and value
    setInnerTextById("grand-total-cost", grandTotalCost);
    console.log(typeof totalPlayerCost);
  });
