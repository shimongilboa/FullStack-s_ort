// const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://data.nba.net/data/10s/prod/v1/2019/players.json')
  .then((response) => {
    // handle success
    let players = response.data.league.standard;
    let randomArr = [22,44,11,77];
    let cards = document.querySelectorAll(".card");
    console.log(cards);
    let i = 0;
    cards.forEach((card) => {
      card.querySelector(".cardName span").innerHTML = players[randomArr[i]].temporaryDisplayName;
      // card.querySelector(".circle").css(background-image: "url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + players[randomArr[i]].personId +".png)");
      // card.querySelector(".circle").css({"backgroundImage": "url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + players[randomArr[i]].personId +".png)"});
      card.querySelector(".circle").style.backgroundImage = "url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + players[randomArr[i]].personId + ".png)";

      card.querySelector(".jersey").innerHTML = "jersey: " + players[randomArr[i]].jersey;
      card.querySelector(".pos").innerHTML = "Position: " + players[randomArr[i]].pos;
      i++;
      // console.log(card);
      // console.log(card);
    });
    console.log(players);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });