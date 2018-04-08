//// TO GO IN JS FILE SHARED ACROSS SITE ////

const gameIcons = { // Object containing game icon URLs
  4:"http://www.court-records.net/Site%20Art/buttons/buttie-apollo.gif",
  AAI:"http://www.court-records.net/Site%20Art/buttons/buttie-edgey.gif",
  AAI2:"http://www.court-records.net/Site%20Art/buttons/buttie-shigaraki.gif",
  5:"http://www.court-records.net/Site%20Art/buttons/buttie-athena.gif",
  DGS:"http://www.court-records.net/Site%20Art/buttons/buttie-ryuu.png",
  6:"http://www.court-records.net/Site%20Art/buttons/buttie-nahyuta.png"
};

function createNav() { // Creates navigation page
  var main = document.createElement("main");

  var topDiv = document.createElement("div");
  topDiv.className = "top";

  var titleImage = document.createElement("img");
  titleImage.src = titleImageUrl;
  titleImage.alt = titleImageAlt;

  topDiv.appendChild(titleImage);
  main.appendChild(topDiv);

  var mainDiv = document.createElement("div");
  mainDiv.className = "main";

  for (var i = 0; i < listItems.length; i++) { // Loops through each item of the navigation page
    var navDiv = document.createElement("div");
    navDiv.className = "navDiv";

    var navLink = document.createElement("a");
    navLink.className = "button";
    navLink.href = listItems[i][1];
    navLink.innerHTML = listItems[i][0];
    if (listItems[i][0].length > 13) { // Gives buttons with a lot of text the class of "small"
      navLink.className = "button small";
    }

    var navDesc = document.createElement("p");
    navDesc.className = "desc";
    navDesc.innerHTML = listItems[i][2];

    var maxBoxes = 0;

    if (listItems[i].length > 3) { // Checks to see if game icons are included in the item of the list

      if (listItems[i][3].length > maxBoxes) { // Sets maxBoxes to the greatest number of game icons any item of the list contains
        maxBoxes = listItems[i][3].length;
      }

      var iconsDiv = document.createElement("div");
      iconsDiv.className = "iconsDiv";

      for (var j = 0; j < listItems[i][3].length; j++) {  // Loops through each game icon listed
        var iconImage = document.createElement("img");
        iconImage.src = gameIcons[listItems[i][3][j][0]];
        iconA = document.createElement("a");
        iconA.href = listItems[i][3][j][1];
        iconA.appendChild(iconImage);
        iconsDiv.appendChild(iconA);
      }
      navDiv.appendChild(iconsDiv);
    }

    for (var j = 0; j < document.getElementsByClassName("iconsDiv").length; j++) { // Sets every game icons div's width to the
      document.getElementsByClassName("iconsDiv")[j].style.width = (maxBoxes * 63) + "px"; // largest width of them all so the icons line up
    }

    navDiv.appendChild(navLink);
    navDiv.appendChild(navDesc);
    mainDiv.appendChild(navDiv);
  }

  main.appendChild(mainDiv);

  document.body.appendChild(main);
};
