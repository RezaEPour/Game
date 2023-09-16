const targetNumber = Math.floor(Math.random() * 10) + 1;
let numberOfGuesses = 0
let Guess;

while (Guess !== targetNumber){
   Guess = parseInt( prompt('Guess The Number (1-10):') );
   numberOfGuesses++;

   if (Guess < targetNumber) {

      console.log("Stopid its low")
   
   } else if (Guess > targetNumber) {
   
      console.log("stopid its too hign")
   
   }
}

