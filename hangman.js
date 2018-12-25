      // Write your functions here
      var pickWord = function () {
        // Create an array of words
        var words = [
         "javascript", 
          "monkey", 
          "amazing", 
          "pancake",
        ];
        // Return a random word
        return words[Math.floor(Math.random() * words.length)];
      }

      var setupAnswerArray = function (word) {
        //Return the answer array
        var answerList = [];
        for (var i = 0; i < word.length; i++) {
          answerList[i] = "_";
        }
        return answerList;
      }

      var showPlayerProgress = function (answerArray) {
        //Use alert to show the player their progress
        alert(answerArray.join(" "));
      }

      var getGuess = function () {
        // Use prompt to get a guess
        var promptGuess = prompt("Guess a letter, or click Cancel to stop playing");
        return promptGuess;
      }

      var updateGameState =  function (guess, word, answerArray) {
        // Update answerArray and return a number showing how many
        // times the guess appears in the word so remainingLetters
        // can be updated
        var guessInTheWord  = 0;

        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess;
            guessInTheWord++;
          }
        }
        return guessInTheWord;
      }

      var showAnswerAndCongratulatePlayer = function (answerArray) {
        // Use alert to show the answer and congratulate the player
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
      }

      // Pick a random word
      var word = pickWord();
      // Set up the answer array
      var answerArray = setupAnswerArray(word);
      var remainingLetters = word.length;

      // The game loop
      while (remainingLetters > 0) {
        // Show the player their progress
        showPlayerProgress(answerArray);
        // Get a guess from the player 
        var guess = getGuess();
          
        if (guess === null) {
          // Exit the game loop
          break;
        } else if (guess.length !== 1) {
          alert("Please enter a single letter.");
        } else {
          // Update the game state with the guess
          var correctGuesses = updateGameState(guess, word, answerArray);
          remainingLetters -= correctGuesses;
        }
      // The end of the game loop  
      }

      // Show the answer and congratulate the player
      showAnswerAndCongratulatePlayer(answerArray);
