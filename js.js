//// TO GO IN JS FILE SHARED ACROSS SITE ////

function createNav() {
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

  for (var i = 0; i < listItems.length; i++) {
    var navDiv = document.createElement("div");
    navDiv.className = "navDiv";

    var navLink = document.createElement("a");
    navLink.className = "button";
    navLink.href = listItems[i][1];
    navLink.innerHTML = listItems[i][0];

    var navDesc = document.createElement("p");
    navDesc.className = "desc";
    navDesc.innerHTML = listItems[i][2];

    var maxBoxes = 0;

    if (listItems[i].length > 3) {

      if (listItems[i][3].length > maxBoxes) {
        maxBoxes = listItems[i][3].length;
      }

      var iconsDiv = document.createElement("div");
      iconsDiv.className = "iconsDiv";

      for (var j = 0; j < listItems[i][3].length; j++) {
        var iconImage = document.createElement("img");
        iconImage.src = gameIcons[listItems[i][3][j][0]];
        iconA = document.createElement("a");
        iconA.href = listItems[i][3][j][1];
        iconA.appendChild(iconImage);
        iconsDiv.appendChild(iconA);
      }
      navDiv.appendChild(iconsDiv);
    }

    for (var j = 0; j < document.getElementsByClassName("iconsDiv").length; j++) {
      document.getElementsByClassName("iconsDiv")[j].style.width = (maxBoxes * 63) + "px";
    }

    navDiv.appendChild(navLink);
    navDiv.appendChild(navDesc);
    mainDiv.appendChild(navDiv);
  }

  main.appendChild(mainDiv);

  document.body.appendChild(main);
};



///// TO GO IN INDIVIDUAL PAGE JS ////

var titleImageUrl = "http://www.court-records.net/Site%20Art/page%20headers/cr%20media.gif";  // URL of title image
var titleImageAlt = "Media";  // Alt tag of title image

// [Button text, Button URL, Description]
var listItems = [
  ["Screenshots", "/screenshots1.htm", "Screenshots from the games. May contain spoilers.", [
    ["4", "/screenshots4.htm"],
    ["AAI", ""],
    ["AAI2", ""],
    ["5", ""],
    ["DGS", ""]
  ]],
  ["Animations", "/animations.html", "Sprites ripped from the games.", [
    ["4", "/sprites5.htm"],
    ["AAI", ""],
    ["AAI2", ""]
  ]],
  ["Official Art", "/art.htm", "Official character and game art.", [
    ["4", ""],
    ["AAI", ""],
    ["5", ""]
  ]],
  ["Locations", "/places.htm", "Background art ripped from the games.", [
    ["4", ""],
    ["AAI", ""]
  ]],
  ["Evidence", "/Evidence.htm", "Evidence icons ripped from the games.", [
    ["4", ""],
    ["AAI", ""],
    ["AAI2", ""],
    ["5", ""]
  ]],
  ["Graphics Rips", "/animations.htm", "Miscellaneous graphics ripped from the games.", [
    ["4", ""],
    ["AAI", ""],
    ["AAI2", ""],
    ["5", ""]
  ]],
  ["Trailers", "/animations.htm", "Links to trailers and other promotional materials."],
  ["Audio", "/animations.htm", "Voice clips and sound effects ripped from the games, and soundtrack tracklists."],
  ["Manga", "/animations.htm", "Manga based on the games."]
];

createNav();
