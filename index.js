import { homeTeams } from "./home-teams.js";
import { awayTeams } from "./away-teams.js";

const selectHomeTeamBtn = document.getElementById("select-home-team-btn");
const selectAwayTeamBtn = document.getElementById("select-away-team-btn");
const customSelect1 = document.getElementById("custom-select-1");
const customSelect2 = document.getElementById("custom-select-2");

selectHomeTeamBtn.addEventListener("click", function () {
  customSelect1.classList.toggle("active");
});

customSelect1.innerHTML = `
<div class="select-home-team">
    <div class="teams-menu" id="${homeTeams[0].id}">${homeTeams[0].name}</div>
    <div class="teams-menu"  id="${homeTeams[1].id}">${homeTeams[1].name}</div>
    <div class="teams-menu"  id="${homeTeams[2].id}">${homeTeams[2].name}</div>
    <div class="teams-menu"  id="${homeTeams[3].id}">${homeTeams[3].name}</div>
    <div class="teams-menu"  id="${homeTeams[4].id}">${homeTeams[4].name}</div>
    <div class="teams-menu"  id="${homeTeams[5].id}">${homeTeams[5].name}</div>
    <div class="teams-menu"  id="${homeTeams[6].id}">${homeTeams[6].name}</div>
    <div class="teams-menu"  id="${homeTeams[7].id}">${homeTeams[7].name}</div>
    <div class="teams-menu"  id="${homeTeams[8].id}">${homeTeams[8].name}</div>
    <div class="teams-menu"  id="${homeTeams[9].id}">${homeTeams[9].name}</div>
    <div class="teams-menu"  id="${homeTeams[10].id}">${homeTeams[10].name}</div>
    <div class="teams-menu"  id="${homeTeams[11].id}">${homeTeams[11].name}</div>
    <div class="teams-menu"  id="${homeTeams[12].id}">${homeTeams[12].name}</div>
    <div class="teams-menu"  id="${homeTeams[13].id}">${homeTeams[13].name}</div>
    <div class="teams-menu"  id="${homeTeams[14].id}">${homeTeams[14].name}</div>
    <div class="teams-menu"  id="${homeTeams[15].id}">${homeTeams[15].name}</div>
    <div class="teams-menu"  id="${homeTeams[16].id}">${homeTeams[16].name}</div>
    <div class="teams-menu"  id="${homeTeams[17].id}">${homeTeams[17].name}</div>
    <div class="teams-menu"  id="${homeTeams[18].id}">${homeTeams[18].name}</div>
    <div class="teams-menu"  id="${homeTeams[19].id}">${homeTeams[19].name}</div>
</div>
`;

// AWAY TEAM HTML
customSelect2.innerHTML = `
<div class="select-away-team">
    <div class="teams-menu" id="${awayTeams[0].id}">${awayTeams[0].name}</div>
    <div class="teams-menu"  id="${awayTeams[1].id}">${awayTeams[1].name}</div>
    <div class="teams-menu"  id="${awayTeams[2].id}">${awayTeams[2].name}</div>
    <div class="teams-menu"  id="${awayTeams[3].id}">${awayTeams[3].name}</div>
    <div class="teams-menu"  id="${awayTeams[4].id}">${awayTeams[4].name}</div>
    <div class="teams-menu"  id="${awayTeams[5].id}">${awayTeams[5].name}</div>
    <div class="teams-menu"  id="${awayTeams[6].id}">${awayTeams[6].name}</div>
    <div class="teams-menu"  id="${awayTeams[7].id}">${awayTeams[7].name}</div>
    <div class="teams-menu"  id="${awayTeams[8].id}">${awayTeams[8].name}</div>
    <div class="teams-menu"  id="${awayTeams[9].id}">${awayTeams[9].name}</div>
    <div class="teams-menu"  id="${awayTeams[10].id}">${awayTeams[10].name}</div>
    <div class="teams-menu"  id="${awayTeams[11].id}">${awayTeams[11].name}</div>
    <div class="teams-menu"  id="${awayTeams[12].id}">${awayTeams[12].name}</div>
    <div class="teams-menu"  id="${awayTeams[13].id}">${awayTeams[13].name}</div>
    <div class="teams-menu"  id="${awayTeams[14].id}">${awayTeams[14].name}</div>
    <div class="teams-menu"  id="${awayTeams[15].id}">${awayTeams[15].name}</div>
    <div class="teams-menu"  id="${awayTeams[16].id}">${awayTeams[16].name}</div>
    <div class="teams-menu"  id="${awayTeams[17].id}">${awayTeams[17].name}</div>
    <div class="teams-menu"  id="${awayTeams[18].id}">${awayTeams[18].name}</div>
    <div class="teams-menu"  id="${awayTeams[19].id}">${awayTeams[19].name}</div>
</div>
`;

// ******* HOME TEAM

document
  .querySelector(".select-home-team")
  .addEventListener("click", getHomeTeamName, {});

// get HOME team name
function getHomeTeamName(e) {
  let homeName = e.target.textContent;
  console.log(homeName);
  //   output home name
  document.getElementById("homeOutput").textContent = homeName;
  //   close home team select button
  selectHomeTeamBtn.style.display = "none";
  customSelect1.style.display = "none";

  if (homeName.length > 0) {
    selectAwayTeamBtn.style.display = "block";
  }
}

// ******** AWAY TEAM

selectAwayTeamBtn.addEventListener("click", function () {
  customSelect2.classList.toggle("active");
});

document
  .querySelector(".select-away-team")
  .addEventListener("click", getAwayTeamName, {});

// get AWAY team name
function getAwayTeamName(e) {
  customSelect2.style.display = "block";
  let awayName = e.target.textContent;
  console.log(awayName);
  //   output away name
  document.getElementById("awayOutput").textContent = awayName;
  //   close AWAY team select button

  selectAwayTeamBtn.style.display = "none";
  customSelect2.style.display = "none";
  document.querySelector(".vs-box").style.display = "block";
  document.querySelector(".output").classList.add("output-style");
  document.querySelector(".homeScore").style.display = "block";
  document.querySelector(".awayScore").style.display = "block";
}
