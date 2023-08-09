clicks = 0;
upgrade = 0;
upgradePrice = 0;

function Increment() {
  clicks += upgrade;
  document.getElementById("Count").innerHTML = clicks;
  console.log(clicks);
}

function UpgradeEnhanceClick() {
  if (clicks > upgradePrice) {
    upgrade++;
    upgradePrice = upgradePrice * 2;
  }
}
