const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('What is your name (or nickname)? ', (name) => {
  rl.question('And what do you like doing? ', (doing) => {
    rl.question('While doing that, what do you listen to? ', (listeningTo) => {
      rl.question('Which meal is your favorite (lunch, dinner...)? ', (favMeal) => {
        rl.question('What\'s your favorite thing to eat in this meal? ', (favFood) => {
          rl.question('Which sport is your absolute favorite? ', (favSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {

              const finalAnswer = `${name} loves listening to ${listeningTo} while ${doing}, eating ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superPower}!`;
              console.log(finalAnswer);
              rl.close();
            
            });
          });
        });
      });
    });
  });
});

