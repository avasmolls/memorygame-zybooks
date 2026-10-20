
// -1 means no guess has been made
let guessFirst = -1;
let guessSecond = -1;

// Cards to be matched
let cards = [
   {
      entity: "&spades;",
      color: "green"
   },
   {
      entity: "&clubs;",
      color: "blue"
   },
   {
      entity: "&hearts;",
      color: "red"
   },
   {
      entity: "&diams;",
      color: "purple"
   },
   {
      entity: "&starf;",
      color: "orange"
   },
   {
      entity: "&malt;",
      color: "gold"
   }
];

// Create the match for each card
cards = cards.concat(cards);

let $cardDivs = [];

$(function () {
   // Add divs for each card
   let $game = $("#cardGrid");

   // Step 1: Hide game board initially
   $game.hide();

   for (let i = 0; i < cards.length; i++) {
      let $card = $("<div></div>");
      $card.on("click", function () {
         clickCard(i);
      });
      $game.append($card);
      $cardDivs.push($card);
   }

   newGame();

   $("#newGameBtn").click(newGame);
});

function clickCard(index) {
   // Only accept click on non-visible card
   if (!$cardDivs[index].hasClass("card-visible")) {
      if (guessFirst == -1) {
         // Flip first card
         showCard(index);
         guessFirst = index;
      }
      else if (guessSecond == -1) {
         // Flip second card
         showCard(index);
         guessSecond = index;

         // Check for a match
         if (cards[guessFirst].entity == cards[guessSecond].entity) {
            showMatch(guessFirst, guessSecond);
            guessFirst = -1;
            guessSecond = -1;
         }
         else {
            setTimeout(function () {
               hideCard(guessFirst);
               hideCard(guessSecond);
               guessFirst = -1;
               guessSecond = -1;
            }, 1000);
         }
      }
   }
}

// Step 2: Animate showing a card
function showCard(index) {
   $cardDivs[index]
      .slideUp(200)
      .queue(function (next) {
         $(this)
            .html(cards[index].entity)
            .css("color", cards[index].color)
            .addClass("card-visible");
         next();
      })
      .slideDown(200);
}

// Step 3: Animate hiding a card
function hideCard(index) {
   $cardDivs[index]
      .slideUp(200)
      .queue(function (next) {
         $(this)
            .html("")
            .removeClass("card-visible");
         next();
      })
      .slideDown(200);
}

// Step 4: Animate matching cards
function showMatch(cardIndex1, cardIndex2) {
   setTimeout(function () {
      $cardDivs[cardIndex1]
         .animate({ fontSize: "100px" }, 200)
         .animate({ fontSize: "75px" }, 200);

      $cardDivs[cardIndex2]
         .animate({ fontSize: "100px" }, 200)
         .animate({ fontSize: "75px" }, 200);
   }, 500);
}

// Step 5: Animate starting a new game
function newGame() {
   $("#cardGrid").fadeOut("normal", function () {

      // Randomize the cards array by swapping card values 20 times
      for (let i = 0; i < 20; i++) {
         let cardIndex1 = getRandomNumber(0, cards.length - 1);
         let cardIndex2 = getRandomNumber(0, cards.length - 1);

         let temp = cards[cardIndex1];
         cards[cardIndex1] = cards[cardIndex2];
         cards[cardIndex2] = temp;
      }

      // Hide all cards
      for (let i = 0; i < $cardDivs.length; i++) {
         $cardDivs[i]
            .html("")
            .removeClass("card-visible")
            .css("font-size", "75px");
      }

      // Nothing selected yet
      guessFirst = -1;
      guessSecond = -1;

      // Fade game board back in
      $("#cardGrid").fadeIn("normal");
   });
}

// Return a random number between min and max (inclusive)
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
