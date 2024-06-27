let arr = [
  "What do snowmen eat for breakfast? Frosted Flakes",
  "What do you call a snowman on rollerblades? A snowmobile",
  "How do polar bears make their beds? Sheets of ice and blankets of snow",
  "What do snowmen call their kids? Chi",
  "Why don’t mountains get cold in the winter? They have snow caps",
  "What kind of ball doesn’t bounce? A snowball",
  "Where do polar bears keep their money? In a snow bank",
  "What is the best way to decorate a snowman’s birthday cake? Lots of ice-ing",
  "What do you call a snowman’s dog? Slush puppy",
  "What did one strawberry say to the other strawberry? If you weren’t so fresh, we wouldn’t be in this jam",
  "What do you call a rabbit with fleas? Bugs Bunny",
  "When do monkeys fall from the sky? Ape-ril showers",
  "What can fall but never gets hurt? Rain",
  "Why do hummingbirds hum? Because they don’t know the words",
  "What do you call a well dressed cat? A dandy lion",
  "Why did the farmer plant $100 bills? To make his soil rich",
  "How do bees brush their hair? Honeycombs",
  "Why are the trees so forgiving? Every fall they say “Let it go.",
  "What kind of bow can’t be tied? A rainbow",
  "How do bees get to school? A school buzz",
  "What’s a chick’s favorite food? Egg-plant",
  "Knock knock. Who’s there? The interrupting cow. The interrupting... MOOOOOOO",
  "Knock, knock! Who’s there? Lettuce. Lettuce who? Lettuce in, it’s cold outside",
  "Knock, knock! Who’s there? Deja vu. Deja vu who? Knock knock! ",
  "Knock, knock! Who’s there? Figs. Figs who? Figs the doorbell",
  "Knock, knock! Who’s there? Eyesore. Eyesore who? Eyesore do love you",
  "Knock, knock! Who’s there? Tank. Tank who? You’re welcome",
  "Knock, knock! Who’s there? Look. Look who? Look through the peephole and find out",
  "Knock, knock! Who’s there? Says. Says who? Says me",
  "Knock, knock! Who’s there? Woo. Woo who? Glad you’re excited, too",
  "Knock, knock! Who’s there? Orange. Orange who? Orange you going to let me in",
  "Knock, knock. Who’s there? Needle. Needle who? Needle little help right now",
  "Knock, knock. Who’s there? Cow says. Cow says who? No, a cow says mooooo",
  "Knock knock. Who’s there? Owls. Owls who? They sure do",
  "Knock knock. Who’s there? Cargo. Cargo who? Car go beep beep",
  "Knock knock. Who’s there? Yoda lady. Yoda lady who? I didn’t know you could yodel",
  "Knock knock. Who’s there? Wah. Wah who? It’s-a me, Mario",
  "Knock knock. Who’s there? Spell. Spell who? W-h-o",
  "Knock knock. Who’s there? Pecan. Pecan who? Pecan somebody your own size",
  "Knock knock. Who’s there? Wafer. Wafer who? Wafer me — I’m coming",
];

function displayRandomJoke() {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomJoke = arr[randomIndex];
  document.getElementById("jokes").innerText = randomJoke;
}

displayRandomJoke();