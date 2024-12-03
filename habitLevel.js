habitLevel.js

const Bag = require("./bag");

const levelThresholds = [];

// Generate thresholds for levels 0 to 20
for (let level = 0; level <= 20; level++) {
  let exp;

  // For levels 0 to 19, each level requires 30 more EXP than the previous
  if (level < 20) {
    exp = level * 30;
  }
  // For level 20 and beyond, it starts at 600 EXP and increases by 50 per level
  else {
    exp = 600 + (level - 20) * 50;
  }

  levelThresholds.push({ level, exp });
}

const calculateHabitXP = (level) => {
  if (level <= 20) {
    const threshold = levelThresholds.find((threshold) => threshold.level === level);
    return threshold ? threshold.exp : 0;
  }

  // For level 21 and beyond, the EXP requirement increases by 50 for each level
  return 600 + (level - 20) * 50;
};

const updateUserLevel = (exp) => {
  let level = 0;

  // Determine the level based on the current EXP
  for (let i = levelThresholds.length - 1; i >= 0; i--) {
    if (exp >= levelThresholds[i].exp) {
      level = levelThresholds[i].level;
      break;
    }
  }

  // Handle levels 21 and above
  if (level >= 20 && exp >= 600) {
    for (let currentLevel = 21; currentLevel <= 100; currentLevel++) {
      const requiredXP = calculateHabitXP(currentLevel);
      if (exp < requiredXP) break;
      level = currentLevel;
    }
  }

  return level;
};

const calculateRewards = (level) => {
  if (level === 100) {
    console.log("Congratulations! You have reached level 100!");
    console.log("A platinum coin has been added to your bag.");
    return { goldCoins: 0, platinumCoins: 1 };
  }

  let goldCoins = 50;
  if (level % 10 === 0) {
    goldCoins = 200; // Base level 10
  } else if (level % 5 === 0) {
    goldCoins = 100; // Base level 5
  }

  console.log(`Level ${level}: Awarded ${goldCoins} gold coins.`);
  return { goldCoins, platinumCoins: 0 };
};

const resetLevel = (level, exp) => {
  console.log(`Level: ${level}, EXP: ${exp}`);
  if (level === 100) {
    console.log(
      "You have reached level 100. Would you like to reset your level to 0 to earn more rewards? (yes/no)"
    );
    const userChoice = prompt("Enter your choice (yes/no): "); // Simulating user choice
    if (userChoice.toLowerCase() === "yes") {
      console.log("Your level has been reset.");
      return { level: 0, exp: 0 };
    } else {
      console.log("Your level has not been reset.");
    }
  }
  return { level, exp };
};

// Example flow to demonstrate functionality
let exp = 5000; // Example total EXP
let level = updateUserLevel(exp);

// Calculate rewards for the current level
const rewards = calculateRewards(level);

// Check for manual reset at level 100
if (level === 100) {
  const resetResult = resetLevel(level, exp);
  level = resetResult.level;
  exp = resetResult.exp;
}

console.log(`Final Level: ${level}, Final EXP: ${exp}`);
