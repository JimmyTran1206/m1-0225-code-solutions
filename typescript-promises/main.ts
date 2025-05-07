import { takeAChance } from './take-a-chance.js';
takeAChance('Jimmy')
  .then((message) => console.log('Winning message: ', message))
  .catch((err) => console.error(err.message))
  .finally(() => console.log('Thank you for playing!'));
