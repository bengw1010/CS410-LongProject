userLevel.js

const { updateHabitLevel } = require('./habitLevel'); 

//Calculate the user level by summing all habit levels
const calculateUserLevel = (habitLevels) => {
  const userLevel = habitLevels.reduce((total, level) => total + level, 0);
  console.log(`User Level (Combined): ${userLevel}`);
  return userLevel;
};

//Calculate the user level based on habit EXP
const updateUserLevel = (habitExps) => {
  const habitLevels = habitExps.map(exp => updateHabitLevel(exp));
  const combinedUserLevel = calculateUserLevel(habitLevels);
  return combinedUserLevel;
};
